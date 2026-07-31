// Mock data for the rental management prototype (Mexico-market names, Spanish copy).
export const COMPLEXES = [
  { id: 'c1', name: 'Residencial Las Palmas', address: 'Av. Insurgentes Sur 1245, Col. Del Valle, CDMX', maps: 'https://maps.google.com/?q=19.3733,-99.1666', coords: '19.3733, -99.1666', manager: 'Marisol Hernández', phone: '+52 55 1234 5678', notes: 'Edificio de 4 niveles, azotea con área común.', photos: 6, color: 'accent' },
  { id: 'c2', name: 'Casa Jacaranda', address: 'Calle Morelos 88, Col. Americana, Guadalajara', maps: 'https://maps.google.com/?q=20.6767,-103.3648', coords: '20.6767, -103.3648', manager: 'Luis Ángel Rosas', phone: '+52 33 9876 5432', notes: 'Casona remodelada, 8 habitaciones tipo estudio.', photos: 9, color: 'accent2' },
  { id: 'c3', name: 'Torre Reforma Norte', address: 'Blvd. Adolfo López Mateos 320, Monterrey', maps: 'https://maps.google.com/?q=25.6866,-100.3161', coords: '25.6866, -100.3161', manager: 'Marisol Hernández', phone: '+52 81 4455 6677', notes: 'Torre de 6 pisos, estacionamiento subterráneo.', photos: 5, color: 'accent' },
];

export const ROOMS = [
  { id: 'r1', number: '101', name: 'Estudio Norte', complexId: 'c1', floor: 1, type: 'Estudio', size: 28, rent: 6800, deposit: 6800, servicesIncluded: ['Internet', 'Agua'], furnished: true, description: 'Estudio luminoso con balcón y closet amplio.', notes: 'Recién pintado.', status: 'ocupada', availableFrom: null, contractEnd: '2026-11-30', tags: ['Amueblada', 'Internet incluido', 'Balcón'] },
  { id: 'r2', number: '102', name: 'Habitación Jardín', complexId: 'c1', floor: 1, type: 'Individual', size: 18, rent: 4200, deposit: 4200, servicesIncluded: ['Agua', 'Limpieza áreas comunes'], furnished: true, description: 'Habitación con vista al jardín interior.', notes: '', status: 'disponible', availableFrom: '2026-07-20', contractEnd: null, tags: ['Amueblada', 'Baño compartido', 'Solo mujeres'] },
  { id: 'r3', number: '201', name: 'Suite Reforma', complexId: 'c1', floor: 2, type: 'Suite', size: 32, rent: 8200, deposit: 8200, servicesIncluded: ['Internet', 'Agua', 'Gas'], furnished: true, description: 'Suite con baño privado y cocineta.', notes: '', status: 'reservada', availableFrom: '2026-08-01', contractEnd: '2026-07-31', tags: ['Amueblada', 'Baño privado', 'Pet friendly'] },
  { id: 'r4', number: '202', name: 'Habitación Sur', complexId: 'c1', floor: 2, type: 'Individual', size: 16, rent: 3900, deposit: 3900, servicesIncluded: ['Agua'], furnished: false, description: 'Habitación sin amueblar, ideal larga estancia.', notes: '', status: 'mantenimiento', availableFrom: '2026-08-10', contractEnd: null, tags: ['Sin amueblar', 'Estacionamiento'] },
  { id: 'r5', number: '301', name: 'Loft Azotea', complexId: 'c1', floor: 3, type: 'Loft', size: 40, rent: 9600, deposit: 9600, servicesIncluded: ['Internet', 'Agua', 'Gas', 'TV Cable'], furnished: true, description: 'Loft con acceso directo a la azotea común.', notes: 'Ideal para pareja.', status: 'disponible', availableFrom: '2026-07-15', contractEnd: null, tags: ['Amueblada', 'Terraza', 'Aire acondicionado'] },
  { id: 'r6', number: 'A1', name: 'Estudio Jacaranda', complexId: 'c2', floor: 1, type: 'Estudio', size: 24, rent: 5200, deposit: 5200, servicesIncluded: ['Agua', 'Internet'], furnished: true, description: 'Estudio con entrada independiente.', notes: '', status: 'ocupada', availableFrom: null, contractEnd: '2026-09-15', tags: ['Amueblada', 'Internet incluido'] },
  { id: 'r7', number: 'A2', name: 'Habitación Patio', complexId: 'c2', floor: 1, type: 'Individual', size: 15, rent: 3600, deposit: 3600, servicesIncluded: ['Agua'], furnished: false, description: 'Habitación con vista al patio central.', notes: '', status: 'disponible', availableFrom: '2026-07-25', contractEnd: null, tags: ['Sin amueblar', 'Cocina compartida'] },
  { id: 'r8', number: 'B1', name: 'Suite Jardín', complexId: 'c2', floor: 2, type: 'Suite', size: 30, rent: 7100, deposit: 7100, servicesIncluded: ['Internet', 'Agua', 'Limpieza'], furnished: true, description: 'Suite con baño privado y escritorio.', notes: '', status: 'reservada', availableFrom: '2026-08-05', contractEnd: '2026-08-04', tags: ['Amueblada', 'Baño privado', 'Pet friendly'] },
  { id: 'r9', number: '501', name: 'Depto Ejecutivo', complexId: 'c3', floor: 5, type: 'Ejecutivo', size: 45, rent: 11500, deposit: 11500, servicesIncluded: ['Internet', 'Agua', 'Gas', 'Seguridad'], furnished: true, description: 'Departamento ejecutivo con estacionamiento asignado.', notes: '', status: 'ocupada', availableFrom: null, contractEnd: '2027-01-31', tags: ['Amueblada', 'Estacionamiento', 'Aire acondicionado'] },
  { id: 'r10', number: '502', name: 'Habitación Norte', complexId: 'c3', floor: 5, type: 'Individual', size: 17, rent: 4400, deposit: 4400, servicesIncluded: ['Agua', 'Internet'], furnished: true, description: 'Habitación con vista a la ciudad.', notes: '', status: 'disponible', availableFrom: '2026-07-18', contractEnd: null, tags: ['Amueblada', 'Internet incluido', 'Solo hombres'] },
];

export const TENANTS = [
  { id: 't1', name: 'John Smith', curp: 'SMIJ850312HDFXXX01', idDoc: 'Pasaporte US 4587236', rfc: 'SMIJ850312AB1', birthdate: '1985-03-12', phone: '+52 55 2211 3344', whatsapp: '+52 55 2211 3344', email: 'john.smith@mail.com', occupation: 'Ingeniero de software', employer: 'Kueski', notes: 'Inquilino puntual.', active: false, roomId: null,
    emergency: { name: 'Anna Smith', relationship: 'Hermana', phone: '+1 305 555 0199', address: 'Miami, FL, USA' },
    history: [{ roomId: 'r1', start: '2024-01-01', end: '2024-08-31' }] },
  { id: 't2', name: 'María García López', curp: 'GALM920604MDFRRR08', idDoc: 'INE 1234567890123', rfc: 'GALM920604CD2', birthdate: '1992-06-04', phone: '+52 55 8877 6655', whatsapp: '+52 55 8877 6655', email: 'maria.garcia@mail.com', occupation: 'Diseñadora gráfica', employer: 'Freelance', notes: '', active: true, roomId: 'r1',
    emergency: { name: 'Roberto García', relationship: 'Padre', phone: '+52 55 1122 3344', address: 'CDMX' },
    history: [{ roomId: 'r1', start: '2024-09-01', end: null }] },
  { id: 't3', name: 'Carlos Alberto Ruiz', curp: 'RUIC900110HJCXXX05', idDoc: 'INE 9988776655443', rfc: 'RUIC900110EF3', birthdate: '1990-01-10', phone: '+52 33 5566 7788', whatsapp: '+52 33 5566 7788', email: 'carlos.ruiz@mail.com', occupation: 'Contador', employer: 'Despacho Ruiz & Asoc.', notes: 'Renovó contrato dos veces.', active: true, roomId: 'r6',
    emergency: { name: 'Lucía Ruiz', relationship: 'Esposa', phone: '+52 33 1231 2312', address: 'Guadalajara' },
    history: [{ roomId: 'r6', start: '2025-09-15', end: null }] },
  { id: 't4', name: 'Fernanda Torres Mejía', curp: 'TOMF980721MNLXXX09', idDoc: 'INE 4455667788990', rfc: 'TOMF980721GH4', birthdate: '1998-07-21', phone: '+52 81 2233 4455', whatsapp: '+52 81 2233 4455', email: 'fernanda.torres@mail.com', occupation: 'Enfermera', employer: 'Hospital San José', notes: '', active: true, roomId: 'r9',
    emergency: { name: 'Patricia Mejía', relationship: 'Madre', phone: '+52 81 9988 7766', address: 'Monterrey' },
    history: [{ roomId: 'r9', start: '2025-02-01', end: null }] },
  { id: 't5', name: 'Diego Armando Salinas', curp: 'SADA940815HMCXXX02', idDoc: 'INE 1122334455667', rfc: 'SADA940815IJ5', birthdate: '1994-08-15', phone: '+52 55 6677 8899', whatsapp: '+52 55 6677 8899', email: 'diego.salinas@mail.com', occupation: 'Chef', employer: 'Restaurante Azul', notes: 'Mudanza por trabajo.', active: false, roomId: null,
    emergency: { name: 'Rosa Salinas', relationship: 'Madre', phone: '+52 55 3344 5566', address: 'CDMX' },
    history: [{ roomId: 'r3', start: '2025-01-01', end: '2026-06-30' }] },
  { id: 't6', name: 'Valentina Cruz Ponce', curp: 'CUPV991203MDFXXX07', idDoc: 'INE 6677889900112', rfc: 'CUPV991203KL6', birthdate: '1999-12-03', phone: '+52 55 4433 2211', whatsapp: '+52 55 4433 2211', email: 'valentina.cruz@mail.com', occupation: 'Estudiante de posgrado', employer: 'UNAM', notes: '', active: false, roomId: null,
    emergency: { name: 'Jorge Cruz', relationship: 'Padre', phone: '+52 55 5544 3322', address: 'CDMX' },
    history: [{ roomId: 'r4', start: '2025-03-01', end: '2026-02-28' }] },
];

export const PROSPECTS = [
  { id: 'p1', name: 'Andrea Villalobos', phone: '+52 55 1010 2020', whatsapp: '+52 55 1010 2020', roomId: 'r2', visitDate: '2026-07-29', notes: 'Busca mudarse en agosto.', status: 'Visita programada' },
  { id: 'p2', name: 'Ricardo Núñez', phone: '+52 33 3030 4040', whatsapp: '+52 33 3030 4040', roomId: 'r7', visitDate: '2026-07-24', notes: 'Ya visitó, evaluando opciones.', status: 'Visitado' },
  { id: 'p3', name: 'Sofía Elizondo', phone: '+52 81 5050 6060', whatsapp: '+52 81 5050 6060', roomId: 'r10', visitDate: '2026-08-02', notes: '', status: 'Nuevo' },
  { id: 'p4', name: 'Emilio Castañeda', phone: '+52 55 7070 8080', whatsapp: '+52 55 7070 8080', roomId: 'r5', visitDate: '2026-07-20', notes: 'Confirmó apartar el loft.', status: 'Reservado' },
  { id: 'p5', name: 'Paola Reséndiz', phone: '+52 33 9090 1212', whatsapp: '+52 33 9090 1212', roomId: 'r8', visitDate: '2026-07-10', notes: 'Rentó otro lugar.', status: 'No interesado' },
];

export const CONTRACTS = [
  { id: 'k1', tenantId: 't2', roomId: 'r1', start: '2024-09-01', end: '2026-11-30', deposit: 6800, status: 'Activo', renewals: 1, notes: 'Renovado en sept. 2025.' },
  { id: 'k2', tenantId: 't3', roomId: 'r6', start: '2025-09-15', end: '2026-09-15', deposit: 5200, status: 'Activo', renewals: 2, notes: '' },
  { id: 'k3', tenantId: 't4', roomId: 'r9', start: '2025-02-01', end: '2027-01-31', deposit: 11500, status: 'Activo', renewals: 0, notes: 'Contrato a 2 años.' },
  { id: 'k4', tenantId: 't1', roomId: 'r1', start: '2024-01-01', end: '2024-08-31', deposit: 6500, status: 'Finalizado', renewals: 0, notes: '' },
  { id: 'k5', tenantId: 't5', roomId: 'r3', start: '2025-01-01', end: '2026-06-30', deposit: 7800, status: 'Finalizado', renewals: 1, notes: '' },
];

export const PAYMENTS = [
  { id: 'pg1', tenantId: 't2', roomId: 'r1', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: '2026-07-04', amount: 6800, method: 'Transferencia', status: 'Pagado' },
  { id: 'pg2', tenantId: 't3', roomId: 'r6', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: '2026-07-06', amount: 5200, method: 'Transferencia', status: 'Pagado' },
  { id: 'pg3', tenantId: 't4', roomId: 'r9', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: null, amount: 11500, method: '—', status: 'Vencido' },
  { id: 'pg4', tenantId: 't2', roomId: 'r1', period: 'Agosto 2026', dueDate: '2026-08-05', paymentDate: null, amount: 6800, method: '—', status: 'Pendiente' },
  { id: 'pg5', tenantId: 't3', roomId: 'r6', period: 'Agosto 2026', dueDate: '2026-08-05', paymentDate: null, amount: 5200, method: '—', status: 'Pendiente' },
  { id: 'pg6', tenantId: 't4', roomId: 'r9', period: 'Junio 2026', dueDate: '2026-06-05', paymentDate: '2026-06-10', amount: 8000, method: 'Efectivo', status: 'Parcial' },
  { id: 'pg7', tenantId: 't2', roomId: 'r1', period: 'Junio 2026', dueDate: '2026-06-05', paymentDate: '2026-06-05', amount: 6800, method: 'Tarjeta', status: 'Pagado' },
  { id: 'pg8', tenantId: 't3', roomId: 'r6', period: 'Junio 2026', dueDate: '2026-06-05', paymentDate: '2026-06-04', amount: 5200, method: 'Transferencia', status: 'Pagado' },
];

export const BANK_ACCOUNTS = [
  { id: 'b1', complexId: 'c1', bank: 'BBVA', holder: 'Marisol Hernández', clabe: '012180001234567895', account: '01234567895', card: '4152 **** **** 3344', alias: 'BBVA Las Palmas' },
  { id: 'b2', complexId: 'c2', bank: 'Santander', holder: 'Luis Ángel Rosas', clabe: '014320009876543211', account: '09876543211', card: '5579 **** **** 1290', alias: 'Santander Jacaranda' },
  { id: 'b3', complexId: 'c3', bank: 'Banorte', holder: 'Marisol Hernández', clabe: '072580005566778899', account: '05566778899', card: '4915 **** **** 7788', alias: 'Banorte Reforma' },
];

export const SERVICES = [
  { id: 's1', complexId: 'c1', type: 'Electricidad', provider: 'CFE', contractNumber: 'CFE-88213', meterNumber: 'MX-4471', accountHolder: 'Residencial Las Palmas SA', billingFrequency: 'Bimestral', dueDate: '2026-08-10', billingCycle: 'Jul-Ago', status: 'Al corriente', notes: '', scope: 'Todo el complejo' },
  { id: 's2', complexId: 'c1', type: 'Internet', provider: 'Totalplay', contractNumber: 'TP-55210', meterNumber: '—', accountHolder: 'Residencial Las Palmas SA', billingFrequency: 'Mensual', dueDate: '2026-08-01', billingCycle: 'Agosto', status: 'Pendiente', notes: 'Compartido entre habitaciones con internet incluido.', scope: 'Piso 1 y 2' },
  { id: 's3', complexId: 'c1', type: 'Agua', provider: 'SACMEX', contractNumber: 'SAC-11298', meterNumber: 'M-9012', accountHolder: 'Residencial Las Palmas SA', billingFrequency: 'Bimestral', dueDate: '2026-09-01', billingCycle: 'Jul-Ago', status: 'Al corriente', notes: '', scope: 'Todo el complejo' },
  { id: 's4', complexId: 'c2', type: 'Gas', provider: 'Gas Express Nieto', contractNumber: 'GEN-3321', meterNumber: 'G-771', accountHolder: 'Luis Ángel Rosas', billingFrequency: 'Mensual', dueDate: '2026-07-28', billingCycle: 'Julio', status: 'Vencido', notes: 'Recordar pronto pago.', scope: 'Todo el complejo' },
  { id: 's5', complexId: 'c2', type: 'Limpieza', provider: 'Clean Home MX', contractNumber: 'CH-1029', meterNumber: '—', accountHolder: 'Luis Ángel Rosas', billingFrequency: 'Semanal', dueDate: '2026-07-31', billingCycle: 'Semana 31', status: 'Al corriente', notes: 'Áreas comunes.', scope: 'Todo el complejo' },
  { id: 's6', complexId: 'c3', type: 'Seguridad', provider: 'Seguritech', contractNumber: 'SEG-6620', meterNumber: '—', accountHolder: 'Torre Reforma Norte SA', billingFrequency: 'Mensual', dueDate: '2026-08-05', billingCycle: 'Agosto', status: 'Al corriente', notes: '', scope: 'Todo el complejo' },
];

export const MAINTENANCE = [
  { id: 'm1', complexId: 'c1', roomId: 'r4', date: '2026-07-22', category: 'Plomería', assignedPerson: 'Javier (plomero)', description: 'Fuga en tubería del baño.', cost: 850, status: 'En proceso' },
  { id: 'm2', complexId: 'c1', roomId: null, date: '2026-07-18', category: 'Eléctrico', assignedPerson: 'Todo Eléctrico SA', description: 'Revisión de instalación en azotea.', cost: 1200, status: 'Completado' },
  { id: 'm3', complexId: 'c2', roomId: 'r7', date: '2026-07-25', category: 'Pintura', assignedPerson: 'Pintores Express', description: 'Repintado tras salida de inquilino.', cost: 1600, status: 'Programado' },
  { id: 'm4', complexId: 'c3', roomId: 'r10', date: '2026-07-15', category: 'Aire acondicionado', assignedPerson: 'Clima Total', description: 'Servicio y limpieza de minisplit.', cost: 950, status: 'Completado' },
];

export const INCIDENTS = [
  { id: 'i1', complexId: 'c1', roomId: 'r4', type: 'Plomería', priority: 'Alta', status: 'Abierto', assignedPerson: 'Javier (plomero)', comments: 3, date: '2026-07-22' },
  { id: 'i2', complexId: 'c2', roomId: 'a2', type: 'Queja de ruido', priority: 'Media', status: 'En revisión', assignedPerson: 'Luis Ángel Rosas', comments: 1, date: '2026-07-19' },
  { id: 'i3', complexId: 'c1', roomId: null, type: 'Daños en área común', priority: 'Baja', status: 'Resuelto', assignedPerson: 'Marisol Hernández', comments: 2, date: '2026-07-10' },
  { id: 'i4', complexId: 'c3', roomId: 'r9', type: 'Eléctrico', priority: 'Alta', status: 'Abierto', assignedPerson: 'Todo Eléctrico SA', comments: 0, date: '2026-07-26' },
];

export const DOCUMENTS = [
  { id: 'd1', type: 'Contrato', tenant: 'María García López', name: 'Contrato_MGarcia_2024.pdf', date: '2024-09-01' },
  { id: 'd2', type: 'INE', tenant: 'Carlos Alberto Ruiz', name: 'INE_CRuiz.pdf', date: '2025-09-10' },
  { id: 'd3', type: 'Comprobante de domicilio', tenant: 'Fernanda Torres Mejía', name: 'ComprobanteDomicilio_FTorres.pdf', date: '2025-02-01' },
  { id: 'd4', type: 'Recibo de pago', tenant: 'María García López', name: 'Recibo_Jul2026.jpg', date: '2026-07-04' },
  { id: 'd5', type: 'CURP', tenant: 'Carlos Alberto Ruiz', name: 'CURP_CRuiz.pdf', date: '2025-09-10' },
  { id: 'd6', type: 'Pagaré', tenant: 'Fernanda Torres Mejía', name: 'Pagare_FTorres.pdf', date: '2025-02-01' },
  { id: 'd7', type: 'Inspección de habitación', tenant: 'Habitación 202', name: 'Inspeccion_202_Jul2026.jpg', date: '2026-07-20' },
  { id: 'd8', type: 'Recibo de pago', tenant: 'Carlos Alberto Ruiz', name: 'Recibo_Jun2026.jpg', date: '2026-06-04' },
];

export const NOTIFICATIONS = [
  { id: 'n1', text: 'El pago de Fernanda Torres (Depto Ejecutivo) está vencido.', time: 'Hace 2 h', type: 'alert' },
  { id: 'n2', text: 'Nuevo prospecto interesado en Estudio Jacaranda.', time: 'Hace 4 h', type: 'info' },
  { id: 'n3', text: 'El contrato de María García vence en 4 meses.', time: 'Ayer', type: 'warning' },
  { id: 'n4', text: 'Mantenimiento de plomería en habitación 202 en proceso.', time: 'Ayer', type: 'info' },
  { id: 'n5', text: 'Recibo de pago subido por Carlos Ruiz.', time: 'Hace 2 días', type: 'success' },
];

export const ACTIVITY = [
  { id: 'a1', user: 'Marisol Hernández', action: 'Registró el pago de Julio de María García López', date: '2026-07-26', time: '10:12' },
  { id: 'a2', user: 'Luis Ángel Rosas', action: 'Actualizó la renta de Habitación A2 a $3,600', date: '2026-07-25', time: '17:45' },
  { id: 'a3', user: 'Marisol Hernández', action: 'Subió comprobante de pago de Carlos Ruiz', date: '2026-07-24', time: '09:30' },
  { id: 'a4', user: 'Sistema', action: 'Asignó a Valentina Cruz Ponce como inactiva, habitación 202 liberada', date: '2026-06-28', time: '00:00' },
  { id: 'a5', user: 'Marisol Hernández', action: 'Cerró el contrato de Diego Salinas', date: '2026-06-30', time: '12:00' },
  { id: 'a6', user: 'Marisol Hernández', action: 'Creó el prospecto Andrea Villalobos', date: '2026-07-20', time: '15:20' },
];

export const CALENDAR_EVENTS = [
  { id: 'e1', date: '2026-07-29', label: 'Visita: Andrea Villalobos — Hab. 102', type: 'visita' },
  { id: 'e2', date: '2026-08-01', label: 'Vence servicio Internet — Las Palmas', type: 'servicio' },
  { id: 'e3', date: '2026-08-05', label: 'Renta vence — María García / Carlos Ruiz', type: 'pago' },
  { id: 'e4', date: '2026-08-04', label: 'Contrato vence — Suite Jardín (Jacaranda)', type: 'contrato' },
  { id: 'e5', date: '2026-07-31', label: 'Limpieza semanal — Jacaranda', type: 'servicio' },
];

export function fmtMoney(n) {
  return '$' + Number(n).toLocaleString('es-MX') + ' MXN';
}
export function fmtDate(d) {
  if (!d) return '—';
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
}
export const STATUS_META = {
  disponible: { label: 'Disponible', dot: '#4a8c5e' },
  reservada: { label: 'Reservada', dot: '#d4a72c' },
  'proxima': { label: 'Disponible pronto', dot: '#e08a3c' },
  ocupada: { label: 'Ocupada', dot: '#c0503f' },
  mantenimiento: { label: 'Mantenimiento', dot: '#6b6b6b' },
};
