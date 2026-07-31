import { supabase } from './supabase-client.js';

const complexOut = (c) => ({ id: c.id, name: c.name, address: c.address, mapsLink: c.maps_link, gps: c.gps || '', manager: c.manager, phone: c.phone, notes: c.notes });
const complexIn = (c) => ({ id: c.id, name: c.name, address: c.address, maps_link: c.mapsLink || null, manager: c.manager, phone: c.phone, notes: c.notes });

const roomOut = (r) => ({ id: r.id, complexId: r.complex_id, number: r.number, name: r.name, floor: r.floor, type: r.type, size: r.size, rent: r.rent, deposit: r.deposit, included: r.included || [], furnished: r.furnished, status: r.status, availableFrom: r.available_from, contractEnd: r.contract_end, tags: r.tags || [], description: r.description });
const roomIn = (r) => ({ id: r.id, complex_id: r.complexId, number: r.number, name: r.name, floor: r.floor, type: r.type, size: r.size, rent: r.rent, deposit: r.deposit, included: r.included || [], furnished: r.furnished, status: r.status, available_from: r.availableFrom || null, contract_end: r.contractEnd || null, tags: r.tags || [], description: r.description });

const tenantOut = (t, history) => ({
  id: t.id, name: t.name, initials: t.initials, curp: t.curp, rfc: t.rfc, birthDate: t.birth_date,
  phone: t.phone, whatsapp: t.whatsapp, email: t.email, occupation: t.occupation, employer: t.employer,
  active: t.active, roomId: t.room_id, moveIn: t.move_in, moveOut: t.move_out, notes: t.notes,
  emergency: { name: t.emergency_name, relation: t.emergency_relation, phone: t.emergency_phone, address: t.emergency_address },
  history: (history || []).filter(h => h.tenant_id === t.id).map(h => ({ roomId: h.room_id, start: h.start_date, end: h.end_date })),
});
const tenantIn = (t) => ({
  id: t.id, name: t.name, initials: t.initials, curp: t.curp || null, rfc: t.rfc || null, birth_date: t.birthDate || null,
  phone: t.phone, whatsapp: t.whatsapp, email: t.email, occupation: t.occupation, employer: t.employer,
  active: t.active, room_id: t.roomId || null, move_in: t.moveIn || null, move_out: t.moveOut || null, notes: t.notes,
  emergency_name: t.emergency && t.emergency.name, emergency_relation: t.emergency && t.emergency.relation,
  emergency_phone: t.emergency && t.emergency.phone, emergency_address: t.emergency && t.emergency.address,
});

const prospectOut = (p) => ({ id: p.id, name: p.name, phone: p.phone, whatsapp: p.whatsapp, interestedRoom: p.interested_room, visitDate: p.visit_date, status: p.status, notes: p.notes });
const prospectIn = (p) => ({ id: p.id, name: p.name, phone: p.phone, whatsapp: p.whatsapp, interested_room: p.interestedRoom || null, visit_date: p.visitDate || null, status: p.status, notes: p.notes });

const contractOut = (c) => ({ id: c.id, tenantId: c.tenant_id, roomId: c.room_id, start: c.start_date, end: c.end_date, deposit: c.deposit, status: c.status, renewals: c.renewals, notes: c.notes });
const contractIn = (c) => ({ id: c.id, tenant_id: c.tenantId, room_id: c.roomId, start_date: c.start || null, end_date: c.end || null, deposit: c.deposit, status: c.status, renewals: c.renewals || 0, notes: c.notes });

const paymentOut = (p) => ({ id: p.id, tenantId: p.tenant_id, roomId: p.room_id, period: p.period, dueDate: p.due_date, paymentDate: p.payment_date, amount: p.amount, method: p.method, status: p.status, receipts: [] });
const paymentIn = (p) => ({ id: p.id, tenant_id: p.tenantId, room_id: p.roomId || null, period: p.period, due_date: p.dueDate || null, payment_date: p.paymentDate || null, amount: p.amount, method: p.method, status: p.status });

const serviceOut = (s) => ({ id: s.id, complexId: s.complex_id, type: s.type, provider: s.provider, contractNumber: s.contract_number, meter: s.meter, holder: s.holder, frequency: s.frequency, dueDate: s.due_date, cycle: s.cycle, status: s.status, scope: s.scope, notes: s.notes });
const serviceIn = (s) => ({ id: s.id, complex_id: s.complexId, type: s.type, provider: s.provider, contract_number: s.contractNumber, meter: s.meter, holder: s.holder, frequency: s.frequency, due_date: s.dueDate || null, cycle: s.cycle, status: s.status, scope: s.scope, notes: s.notes });

const maintOut = (m) => ({ id: m.id, complexId: m.complex_id, roomId: m.room_id, date: m.date, category: m.category, assignedTo: m.assigned_to, description: m.description, cost: m.cost, status: m.status });
const maintIn = (m) => ({ id: m.id, complex_id: m.complexId, room_id: m.roomId || null, date: m.date || null, category: m.category, assigned_to: m.assignedTo, description: m.description, cost: m.cost || 0, status: m.status });

const incidentOut = (i) => ({ id: i.id, complexId: i.complex_id, roomId: i.room_id, category: i.category, priority: i.priority, status: i.status, assignedTo: i.assigned_to, description: i.description, comments: i.comments });
const incidentIn = (i) => ({ id: i.id, complex_id: i.complexId, room_id: i.roomId || null, category: i.category, priority: i.priority, status: i.status, assigned_to: i.assignedTo, description: i.description, comments: i.comments || 0 });

const docOut = (d) => ({ id: d.id, category: d.category, name: d.name, relatedTo: d.related_to, date: d.date });
const docIn = (d) => ({ id: d.id, category: d.category, name: d.name, related_to: d.relatedTo, date: d.date || null });

const accountOut = (a, movements) => ({
  id: a.id, type: a.type, complexId: a.complex_id, roomIds: a.room_ids || [], bank: a.bank, holder: a.holder,
  clabe: a.clabe, account: a.account_number, alias: a.alias, balance: Number(a.balance || 0),
  movements: (movements || []).filter(m => m.account_id === a.id).map(m => ({ id: String(m.id), date: m.date, amount: Number(m.amount), type: m.type, note: m.note })).sort((x, y) => (y.date || '').localeCompare(x.date || '')),
});
const accountIn = (a) => ({ id: a.id, type: a.type, complex_id: a.complexId || null, room_ids: a.roomIds || [], bank: a.bank, holder: a.holder, clabe: a.clabe, account_number: a.account, alias: a.alias, balance: a.balance || 0 });

export async function loadAll() {
  const [complexes, rooms, tenants, tenantHistory, prospects, contracts, payments, services, maintenance, incidents, documents, accounts, movements] = await Promise.all([
    supabase.from('complexes').select('*'), supabase.from('rooms').select('*'), supabase.from('tenants').select('*'),
    supabase.from('tenant_history').select('*'), supabase.from('prospects').select('*'), supabase.from('contracts').select('*'),
    supabase.from('payments').select('*'), supabase.from('services').select('*'), supabase.from('maintenance').select('*'),
    supabase.from('incidents').select('*'), supabase.from('documents').select('*'), supabase.from('accounts').select('*'),
    supabase.from('account_movements').select('*'),
  ]);
  return {
    complexes: (complexes.data || []).map(complexOut),
    rooms: (rooms.data || []).map(roomOut),
    tenants: (tenants.data || []).map(t => tenantOut(t, tenantHistory.data)),
    prospects: (prospects.data || []).map(prospectOut),
    contracts: (contracts.data || []).map(contractOut),
    payments: (payments.data || []).map(paymentOut),
    services: (services.data || []).map(serviceOut),
    maintenance: (maintenance.data || []).map(maintOut),
    incidents: (incidents.data || []).map(incidentOut),
    documents: (documents.data || []).map(docOut),
    accounts: (accounts.data || []).map(a => accountOut(a, movements.data)),
  };
}

export async function seedAll(sample) {
  await supabase.from('complexes').insert(sample.COMPLEXES.map(complexIn));
  await supabase.from('rooms').insert(sample.ROOMS.map(roomIn));
  await supabase.from('tenants').insert(sample.TENANTS.map(tenantIn));
  const historyRows = [];
  sample.TENANTS.forEach(t => (t.history || []).forEach(h => historyRows.push({ tenant_id: t.id, room_id: h.roomId, start_date: h.start, end_date: h.end })));
  if (historyRows.length) await supabase.from('tenant_history').insert(historyRows);
  await supabase.from('prospects').insert(sample.PROSPECTS.map(prospectIn));
  await supabase.from('contracts').insert(sample.CONTRACTS.map(contractIn));
  await supabase.from('payments').insert(sample.PAYMENTS.map(paymentIn));
  await supabase.from('services').insert(sample.SERVICES.map(serviceIn));
  await supabase.from('maintenance').insert(sample.MAINTENANCE.map(maintIn));
  await supabase.from('incidents').insert(sample.INCIDENTS.map(incidentIn));
  await supabase.from('documents').insert(sample.DOCUMENTS.map(docIn));
  const accountRows = Object.keys(sample.BANK_ACCOUNTS).map(cid => {
    const acc = sample.BANK_ACCOUNTS[cid];
    const paid = sample.PAYMENTS.filter(p => p.status === 'paid' && (sample.ROOMS.find(r => r.id === p.roomId) || {}).complexId === cid);
    return { id: cid, type: 'bank', complexId: cid, roomIds: [], bank: acc.bank, holder: acc.holder, clabe: acc.clabe, account: acc.account, alias: acc.alias, balance: paid.reduce((a, p) => a + p.amount, 0), _paid: paid };
  });
  accountRows.push({ id: 'cash1', type: 'cash', complexId: null, roomIds: [], bank: '', holder: '', clabe: '', account: '', alias: 'Efectivo general', balance: 0, _paid: [] });
  await supabase.from('accounts').insert(accountRows.map(accountIn));
  const movementRows = [];
  accountRows.forEach(a => a._paid.forEach(p => {
    const t = sample.TENANTS.find(x => x.id === p.tenantId);
    movementRows.push({ account_id: a.id, date: p.paymentDate, amount: p.amount, type: 'deposit', note: (t ? t.name : 'Inquilino') + ' · ' + p.period });
  }));
  if (movementRows.length) await supabase.from('account_movements').insert(movementRows);
}

export const insertComplex = (c) => supabase.from('complexes').insert(complexIn(c));
export const insertRoom = (r) => supabase.from('rooms').insert(roomIn(r));
export const updateRoom = (id, fields) => supabase.from('rooms').update(fields).eq('id', id);
export const insertTenant = (t) => supabase.from('tenants').insert(tenantIn(t)).then(() => {
  if (t.history && t.history[0]) supabase.from('tenant_history').insert({ tenant_id: t.id, room_id: t.history[0].roomId, start_date: t.history[0].start, end_date: t.history[0].end }).then(() => {});
});
export const updateTenant = (id, fields) => supabase.from('tenants').update(fields).eq('id', id);
export const closeTenantHistory = (roomId, endDate) => supabase.from('tenant_history').update({ end_date: endDate }).eq('room_id', roomId).is('end_date', null);
export const insertProspect = (p) => supabase.from('prospects').insert(prospectIn(p));
export const updateProspectStatus = (id, status) => supabase.from('prospects').update({ status }).eq('id', id);
export const insertPayment = (p) => supabase.from('payments').insert(paymentIn(p));
export const updatePayment = (id, fields) => supabase.from('payments').update(fields).eq('id', id);
export const updateService = (id, fields) => supabase.from('services').update(fields).eq('id', id);
export const updateMaintenance = (id, fields) => supabase.from('maintenance').update(fields).eq('id', id);
export const updateIncident = (id, fields) => supabase.from('incidents').update(fields).eq('id', id);
export const insertAccount = (a) => supabase.from('accounts').insert(accountIn(a));
export const updateAccountBalance = (id, balance) => supabase.from('accounts').update({ balance }).eq('id', id);
export const insertMovement = (accountId, m) => supabase.from('account_movements').insert({ account_id: accountId, date: m.date, amount: m.amount, type: m.type, note: m.note });
