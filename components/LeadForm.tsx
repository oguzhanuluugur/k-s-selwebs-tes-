'use client';

import { useMemo, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
  consent: false
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = typeof initialState;

type Errors = Partial<Record<keyof FormState, string>>;

export const LeadForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const validate = (state: FormState) => {
    const nextErrors: Errors = {};

    if (state.name.trim().length < 2) {
      nextErrors.name = 'Lütfen adınızı girin.';
    }
    if (!emailRegex.test(state.email)) {
      nextErrors.email = 'Geçerli bir e-posta adresi girin.';
    }
    if (state.company.trim().length < 2) {
      nextErrors.company = 'Şirket adını girin.';
    }
    if (state.message.trim().length < 10) {
      nextErrors.message = 'Kısaca ihtiyacınızı belirtin.';
    }
    if (!state.consent) {
      nextErrors.consent = 'KVKK onayı gereklidir.';
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    const nextState = { ...form, [field]: value } as FormState;
    setForm(nextState);
    setErrors(validate(nextState));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          recaptchaToken: 'TODO_RECAPTCHA_TOKEN'
        })
      });

      if (!response.ok) {
        throw new Error('Form gönderilemedi.');
      }

      setStatus('sent');
      setForm(initialState);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-ink-900">
          Ad Soyad
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => handleChange('name', event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
            placeholder="Adınız Soyadınız"
            required
          />
          {errors.name ? <span className="text-xs text-red-600">{errors.name}</span> : null}
        </label>
        <label className="space-y-2 text-sm font-medium text-ink-900">
          E-posta
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
            placeholder="name@company.com"
            required
          />
          {errors.email ? <span className="text-xs text-red-600">{errors.email}</span> : null}
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-ink-900">
        Şirket
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={(event) => handleChange('company', event.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
          placeholder="Şirketiniz"
          required
        />
        {errors.company ? <span className="text-xs text-red-600">{errors.company}</span> : null}
      </label>
      <label className="space-y-2 text-sm font-medium text-ink-900">
        Proje Detayı
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => handleChange('message', event.target.value)}
          className="min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
          placeholder="Kısa bir özet paylaşın."
          required
        />
        {errors.message ? <span className="text-xs text-red-600">{errors.message}</span> : null}
      </label>
      <label className="flex items-center gap-3 text-sm text-ink-700">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => handleChange('consent', event.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent"
          required
        />
        KVKK kapsamında verilerimin işlenmesini kabul ediyorum.
      </label>
      {errors.consent ? <span className="block text-xs text-red-600">{errors.consent}</span> : null}

      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-xs text-ink-600">
        reCAPTCHA v3 entegrasyonu için "recaptchaToken" alanı hazırdır. Anahtarlar eklenince otomatik doğrulama yapılacaktır.
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || !isValid}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Gönderiliyor...' : 'Teklif Al'}
      </button>

      {status === 'sent' ? (
        <p className="text-sm text-emerald-600">Talebiniz alındı. 24 saat içinde dönüş yapacağız.</p>
      ) : null}
      {status === 'error' ? (
        <p className="text-sm text-red-600">Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.</p>
      ) : null}
    </form>
  );
};
