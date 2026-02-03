import { promises as fs } from 'fs';
import path from 'path';

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  createdAt: string;
};

const leadsFilePath = path.join(process.cwd(), 'data', 'leads.json');

const ensureLeadsFile = async () => {
  await fs.mkdir(path.dirname(leadsFilePath), { recursive: true });

  try {
    await fs.access(leadsFilePath);
  } catch {
    await fs.writeFile(leadsFilePath, JSON.stringify([]));
  }
};

export const readLeads = async (): Promise<Lead[]> => {
  await ensureLeadsFile();
  const data = await fs.readFile(leadsFilePath, 'utf-8');
  return JSON.parse(data) as Lead[];
};

export const appendLead = async (lead: Lead) => {
  const leads = await readLeads();
  const nextLeads = [lead, ...leads];
  await fs.writeFile(leadsFilePath, JSON.stringify(nextLeads, null, 2));
  return nextLeads;
};
