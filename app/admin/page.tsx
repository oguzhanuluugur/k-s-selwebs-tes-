import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { createMetadata } from '@/lib/seo';
import { readLeads } from '@/lib/leads';

export const metadata = createMetadata({
  title: 'Admin Panel',
  description: 'Teklif ve lead kayıtlarını yönetin.',
  path: '/admin'
});

export default async function AdminPage() {
  const leads = await readLeads();

  return (
    <section className="py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Admin"
          title="Lead Yönetimi"
          description="Formdan gelen tüm talepler burada listelenir. CRM webhook entegrasyonu için ortam değişkenlerini ekleyin."
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink-900">Toplam Talep</p>
            <p className="text-lg font-semibold text-ink-900">{leads.length}</p>
          </div>
          <p className="mt-2 text-xs text-ink-500">
            CRM entegrasyonu için <code className="font-mono">CRM_WEBHOOK_URL</code> ortam değişkenini
            ayarlayın. Admin API erişimi için <code className="font-mono">ADMIN_TOKEN</code> kullanabilirsiniz.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-ink-500">
              <tr>
                <th className="px-6 py-4">Tarih</th>
                <th className="px-6 py-4">İsim</th>
                <th className="px-6 py-4">Şirket</th>
                <th className="px-6 py-4">E-posta</th>
                <th className="px-6 py-4">Mesaj</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td className="px-6 py-6 text-sm text-ink-600" colSpan={5}>
                    Henüz kayıt bulunmuyor. Formdan ilk talebi gönderdiğinizde burada göreceksiniz.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="border-t border-slate-100">
                    <td className="px-6 py-4 text-xs text-ink-500">
                      {new Date(lead.createdAt).toLocaleString('tr-TR')}
                    </td>
                    <td className="px-6 py-4 font-medium text-ink-900">{lead.name}</td>
                    <td className="px-6 py-4 text-ink-700">{lead.company}</td>
                    <td className="px-6 py-4 text-ink-700">{lead.email}</td>
                    <td className="px-6 py-4 text-ink-700">{lead.message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
