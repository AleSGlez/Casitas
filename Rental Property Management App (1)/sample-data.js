// Fictional Mexican-market sample data for the property management app.
export const COMPLEXES = [
  { id: 'c1', name: 'Residencial Jacaranda', address: 'Av. Insurgentes Sur 1420, Col. Del Valle, CDMX', gps: '19.3841, -99.1677', manager: 'Laura Méndez', phone: '55 2314 7789', notes: 'Portón automático, requiere código de acceso después de las 22:00.', rooms: 6, occupied: 4 },
  { id: 'c2', name: 'Casa Mirador Condesa', address: 'Calle Amsterdam 312, Col. Condesa, CDMX', gps: '19.4108, -99.1712', manager: 'Diego Torres', phone: '55 8890 2245', notes: 'Azotea compartida, mantenimiento de jardín los lunes.', rooms: 5, occupied: 3 },
  { id: 'c3', name: 'Complejo Los Encinos', address: 'Priv. de los Encinos 88, Zapopan, Jal.', gps: '20.7214, -103.3910', manager: 'Renata Islas', phone: '33 1122 5567', notes: 'Estacionamiento con 4 cajones para visitas.', rooms: 5, occupied: 3 },
];

export const ROOMS = [
  { id: 'r1', complexId: 'c1', number: '101', name: 'Suite Jacaranda Norte', floor: 1, type: 'Habitación privada', size: 18, rent: 6800, deposit: 6800, included: ['Internet', 'Agua'], furnished: true, status: 'occupied', availableFrom: null, contractEnd: '2026-11-30', tags: ['Amueblada', 'Baño privado', 'Internet incluido'], description: 'Habitación luminosa con balcón, closet amplio y baño privado.' },
  { id: 'r2', complexId: 'c1', number: '102', name: 'Studio Jacaranda Sur', floor: 1, type: 'Estudio', size: 24, rent: 9200, deposit: 9200, included: ['Internet', 'Agua', 'Luz'], furnished: true, status: 'available', availableFrom: '2026-08-01', contractEnd: null, tags: ['Amueblada', 'Pet friendly', 'Aire acondicionado'], description: 'Estudio independiente con cocineta y entrada propia.' },
  { id: 'r3', complexId: 'c1', number: '201', name: 'Habitación 201', floor: 2, type: 'Habitación privada', size: 15, rent: 5600, deposit: 5600, included: ['Agua'], furnished: false, status: 'reserved', availableFrom: '2026-08-15', contractEnd: null, tags: ['Cocina compartida'], description: 'Habitación sencilla, ideal para estudiantes.' },
  { id: 'r4', complexId: 'c1', number: '202', name: 'Habitación 202', floor: 2, type: 'Habitación privada', size: 16, rent: 5800, deposit: 5800, included: ['Agua', 'Internet'], furnished: true, status: 'occupied', availableFrom: null, contractEnd: '2026-09-15', tags: ['Amueblada', 'Solo mujeres'], description: 'Ambiente tranquilo, piso exclusivo para mujeres.' },
  { id: 'r5', complexId: 'c1', number: '203', name: 'Habitación 203', floor: 2, type: 'Habitación privada', size: 16, rent: 5800, deposit: 5800, included: ['Agua'], furnished: false, status: 'maintenance', availableFrom: '2026-08-10', contractEnd: null, tags: ['Baño compartido'], description: 'En mantenimiento por reparación de plafón.' },
  { id: 'r6', complexId: 'c1', number: '301', name: 'Penthouse Jacaranda', floor: 3, type: 'Departamento', size: 42, rent: 14500, deposit: 14500, included: ['Internet', 'Agua', 'Luz', 'Gas'], furnished: true, status: 'occupied', availableFrom: null, contractEnd: '2027-01-31', tags: ['Amueblada', 'Terraza', 'Estacionamiento'], description: 'Departamento completo con terraza privada.' },

  { id: 'r7', complexId: 'c2', number: 'A1', name: 'Loft Amsterdam', floor: 1, type: 'Loft', size: 30, rent: 11200, deposit: 11200, included: ['Internet', 'Agua'], furnished: true, status: 'occupied', availableFrom: null, contractEnd: '2026-10-31', tags: ['Amueblada', 'Internet incluido'], description: 'Loft de doble altura con ventanales.' },
  { id: 'r8', complexId: 'c2', number: 'A2', name: 'Habitación Condesa 2', floor: 1, type: 'Habitación privada', size: 14, rent: 6200, deposit: 6200, included: ['Agua', 'Internet'], furnished: true, status: 'available', availableFrom: '2026-07-30', contractEnd: null, tags: ['Amueblada', 'Pet friendly'], description: 'Habitación cerca del parque España.' },
  { id: 'r9', complexId: 'c2', number: 'B1', name: 'Habitación Condesa 3', floor: 2, type: 'Habitación privada', size: 15, rent: 6400, deposit: 6400, included: ['Agua'], furnished: false, status: 'occupied', availableFrom: null, contractEnd: '2026-08-05', tags: ['Cocina compartida'], description: 'Habitación con vista al jardín interior.' },
  { id: 'r10', complexId: 'c2', number: 'B2', name: 'Studio Condesa', floor: 2, type: 'Estudio', size: 26, rent: 9800, deposit: 9800, included: ['Internet', 'Agua', 'Luz'], furnished: true, status: 'soon', availableFrom: '2026-08-20', contractEnd: '2026-08-19', tags: ['Amueblada', 'Aire acondicionado'], description: 'Studio independiente, próxima liberación.' },
  { id: 'r11', complexId: 'c2', number: 'C1', name: 'Habitación Ático', floor: 3, type: 'Habitación privada', size: 17, rent: 6900, deposit: 6900, included: ['Agua', 'Internet'], furnished: true, status: 'reserved', availableFrom: '2026-08-12', contractEnd: null, tags: ['Amueblada', 'Terraza compartida'], description: 'Última habitación del ático con acceso a terraza.' },

  { id: 'r12', complexId: 'c3', number: '1', name: 'Encinos 1', floor: 1, type: 'Habitación privada', size: 16, rent: 4800, deposit: 4800, included: ['Agua'], furnished: true, status: 'occupied', availableFrom: null, contractEnd: '2026-12-01', tags: ['Amueblada', 'Estacionamiento'], description: 'Habitación con acceso directo a jardín.' },
  { id: 'r13', complexId: 'c3', number: '2', name: 'Encinos 2', floor: 1, type: 'Habitación privada', size: 16, rent: 4800, deposit: 4800, included: ['Agua'], furnished: false, status: 'available', availableFrom: '2026-07-28', contractEnd: null, tags: ['Cocina compartida', 'Estacionamiento'], description: 'Disponible de inmediato.' },
  { id: 'r14', complexId: 'c3', number: '3', name: 'Encinos 3', floor: 2, type: 'Habitación privada', size: 15, rent: 4600, deposit: 4600, included: ['Agua', 'Internet'], furnished: true, status: 'occupied', availableFrom: null, contractEnd: '2026-08-25', tags: ['Amueblada', 'Solo hombres'], description: 'Piso exclusivo para hombres.' },
  { id: 'r15', complexId: 'c3', number: '4', name: 'Encinos 4', floor: 2, type: 'Habitación privada', size: 18, rent: 5100, deposit: 5100, included: ['Agua'], furnished: false, status: 'maintenance', availableFrom: '2026-08-05', contractEnd: null, tags: ['Baño compartido'], description: 'Pintura y revisión eléctrica en proceso.' },
  { id: 'r16', complexId: 'c3', number: '5', name: 'Encinos Suite', floor: 3, type: 'Suite', size: 28, rent: 8200, deposit: 8200, included: ['Internet', 'Agua', 'Gas'], furnished: true, status: 'occupied', availableFrom: null, contractEnd: '2026-11-10', tags: ['Amueblada', 'Baño privado', 'Aire acondicionado'], description: 'Suite con baño privado y aire acondicionado.' },
];

export const TENANTS = [
  { id: 't1', name: 'Sofía Ramírez Cuevas', initials: 'SR', curp: 'RACS980512MDFMRF07', rfc: 'RACS980512QX3', birthDate: '1998-05-12', phone: '55 1234 5678', whatsapp: '55 1234 5678', email: 'sofia.ramirez@mail.com', occupation: 'Diseñadora UX', employer: 'Estudio Nimbus', active: true, roomId: 'r1', moveIn: '2025-12-01', notes: 'Prefiere contacto por WhatsApp.', emergency: { name: 'Marta Cuevas', relation: 'Madre', phone: '55 9988 1122', address: 'Av. Universidad 220, CDMX' }, history: [{ roomId: 'r1', label: 'Suite Jacaranda Norte · 101', start: '2025-12-01', end: null }] },
  { id: 't2', name: 'Jorge Alberto Nieto', initials: 'JN', curp: 'NIEJ950203HDFTRR01', rfc: 'NIEJ950203KX1', birthDate: '1995-02-03', phone: '55 2233 4455', whatsapp: '55 2233 4455', email: 'jorge.nieto@mail.com', occupation: 'Contador', employer: 'Grupo Fiscalia', active: true, roomId: 'r4', moveIn: '2026-01-15', notes: '', emergency: { name: 'Ana Nieto', relation: 'Hermana', phone: '55 7766 3344', address: 'Calz. de Tlalpan 50, CDMX' }, history: [{ roomId: 'r4', label: 'Habitación 202', start: '2026-01-15', end: null }] },
  { id: 't3', name: 'Valeria Ochoa Prieto', initials: 'VO', curp: 'OOPV970811MDFCRL04', rfc: '', birthDate: '1997-08-11', phone: '55 3344 5566', whatsapp: '55 3344 5566', email: 'valeria.ochoa@mail.com', occupation: 'Arquitecta', employer: 'Independiente', active: true, roomId: 'r6', moveIn: '2025-06-01', notes: 'Tiene mascota (gato).', emergency: { name: 'Pedro Ochoa', relation: 'Padre', phone: '55 6655 7788', address: 'Periférico Sur 3200, CDMX' }, history: [{ roomId: 'r6', label: 'Penthouse Jacaranda', start: '2025-06-01', end: null }] },
  { id: 't4', name: 'Miguel Ángel Soto', initials: 'MS', curp: 'SOMM920115HJCTGG03', rfc: 'SOMM920115LX2', birthDate: '1992-01-15', phone: '33 4455 6677', whatsapp: '33 4455 6677', email: 'miguel.soto@mail.com', occupation: 'Ingeniero de software', employer: 'Kobalto', active: true, roomId: 'r12', moveIn: '2025-09-01', notes: '', emergency: { name: 'Lucía Soto', relation: 'Esposa', phone: '33 2211 9900', address: 'Av. Patria 1500, Zapopan' }, history: [{ roomId: 'r12', label: 'Encinos 1', start: '2025-09-01', end: null }] },
  { id: 't5', name: 'Karla Jiménez Rosales', initials: 'KJ', curp: 'JIRK990722MJCMSR08', rfc: '', birthDate: '1999-07-22', phone: '33 5566 7788', whatsapp: '33 5566 7788', email: 'karla.jimenez@mail.com', occupation: 'Estudiante de posgrado', employer: 'ITESO', active: true, roomId: 'r14', moveIn: '2026-02-01', notes: '', emergency: { name: 'Raúl Jiménez', relation: 'Padre', phone: '33 8877 6655', address: 'Av. López Mateos 900, Guadalajara' }, history: [{ roomId: 'r14', label: 'Encinos 3', start: '2026-02-01', end: null }] },
  { id: 't6', name: 'Andrés Villaseñor', initials: 'AV', curp: 'VIAA930904HDFLLN09', rfc: 'VIAA930904MX7', birthDate: '1993-09-04', phone: '55 6677 8899', whatsapp: '55 6677 8899', email: 'andres.villasenor@mail.com', occupation: 'Fotógrafo', employer: 'Independiente', active: true, roomId: 'r7', moveIn: '2025-11-01', notes: 'Estudio también usado para trabajo.', emergency: { name: 'Diana Villaseñor', relation: 'Hermana', phone: '55 1199 2288', address: 'Roma Norte, CDMX' }, history: [{ roomId: 'r7', label: 'Loft Amsterdam', start: '2025-11-01', end: null }] },
  { id: 't7', name: 'Paulina Reséndiz', initials: 'PR', curp: 'RESE010330MDFSNL02', rfc: '', birthDate: '2001-03-30', phone: '55 7788 9900', whatsapp: '55 7788 9900', email: 'paulina.resendiz@mail.com', occupation: 'Community manager', employer: 'Vector Studio', active: true, roomId: 'r9', moveIn: '2026-03-01', notes: '', emergency: { name: 'Óscar Reséndiz', relation: 'Padre', phone: '55 3300 4411', address: 'Nápoles, CDMX' }, history: [{ roomId: 'r9', label: 'Habitación Condesa 3', start: '2026-03-01', end: null }] },
  { id: 't8', name: 'Fernando Castillo Ruiz', initials: 'FC', curp: 'CARF940618HJCSZR05', rfc: 'CARF940618NX0', birthDate: '1994-06-18', phone: '33 6677 5544', whatsapp: '33 6677 5544', email: 'fernando.castillo@mail.com', occupation: 'Chef', employer: 'Restaurante Alcalde', active: true, roomId: 'r16', moveIn: '2025-08-01', notes: '', emergency: { name: 'Rosa Ruiz', relation: 'Madre', phone: '33 1234 8899', address: 'Chapalita, Guadalajara' }, history: [{ roomId: 'r16', label: 'Encinos Suite', start: '2025-08-01', end: null }] },
  { id: 't9', name: 'John Smith', initials: 'JS', curp: 'N/A (extranjero)', rfc: '', birthDate: '1990-03-22', phone: '55 0000 1111', whatsapp: '55 0000 1111', email: 'john.smith@mail.com', occupation: 'Consultor', employer: 'Remote Co', active: false, roomId: null, moveIn: '2024-01-01', moveOut: '2024-08-31', notes: 'Se mudó de regreso a su país.', emergency: { name: '—', relation: '—', phone: '—', address: '—' }, history: [{ roomId: 'r4', label: 'Habitación 202', start: '2024-01-01', end: '2024-08-31' }] },
  { id: 't10', name: 'Maria García', initials: 'MG', curp: 'GAMA960214MDFRRR06', rfc: '', birthDate: '1996-02-14', phone: '55 2222 3333', whatsapp: '55 2222 3333', email: 'maria.garcia@mail.com', occupation: 'Enfermera', employer: 'Hospital Ángeles', active: false, roomId: null, moveIn: '2024-09-01', moveOut: '2025-12-31', notes: 'Cambió de ciudad por trabajo.', emergency: { name: 'Luis García', relation: 'Hermano', phone: '55 4444 5555', address: 'Del Valle, CDMX' }, history: [{ roomId: 'r4', label: 'Habitación 202', start: '2024-09-01', end: '2025-12-31' }] },
];

export const PROSPECTS = [
  { id: 'p1', name: 'Regina Uribe', phone: '55 1122 3344', whatsapp: '55 1122 3344', interestedRoom: 'r2', visitDate: '2026-07-30', status: 'visit_scheduled', notes: 'Busca estudio con estacionamiento cercano.' },
  { id: 'p2', name: 'Iván Domínguez', phone: '33 2233 4455', whatsapp: '33 2233 4455', interestedRoom: 'r13', visitDate: '2026-07-28', status: 'new', notes: 'Contactó por Facebook Marketplace.' },
  { id: 'p3', name: 'Cecilia Marín', phone: '55 3344 5566', whatsapp: '55 3344 5566', interestedRoom: 'r8', visitDate: '2026-07-25', status: 'visited', notes: 'Le gustó, está comparando opciones.' },
  { id: 'p4', name: 'Tomás Aguilar', phone: '55 4455 6677', whatsapp: '55 4455 6677', interestedRoom: 'r3', visitDate: '2026-08-01', status: 'reserved', notes: 'Depositó apartado el 20 de julio.' },
  { id: 'p5', name: 'Brenda Salcedo', phone: '33 5566 7788', whatsapp: '33 5566 7788', interestedRoom: 'r13', visitDate: '2026-07-15', status: 'not_interested', notes: 'Encontró opción más económica.' },
];

export const CONTRACTS = [
  { id: 'k1', tenantId: 't1', roomId: 'r1', start: '2025-12-01', end: '2026-11-30', deposit: 6800, status: 'active', renewals: 1, notes: '' },
  { id: 'k2', tenantId: 't2', roomId: 'r4', start: '2026-01-15', end: '2026-09-15', deposit: 5800, status: 'expiring', renewals: 0, notes: 'Pendiente confirmar renovación.' },
  { id: 'k3', tenantId: 't3', roomId: 'r6', start: '2025-06-01', end: '2027-01-31', deposit: 14500, status: 'active', renewals: 1, notes: '' },
  { id: 'k4', tenantId: 't4', roomId: 'r12', start: '2025-09-01', end: '2026-12-01', deposit: 4800, status: 'active', renewals: 0, notes: '' },
  { id: 'k5', tenantId: 't5', roomId: 'r14', start: '2026-02-01', end: '2026-08-25', deposit: 4600, status: 'expiring', renewals: 0, notes: 'Estudiante, confirmar continuidad de beca.' },
  { id: 'k6', tenantId: 't6', roomId: 'r7', start: '2025-11-01', end: '2026-10-31', deposit: 11200, status: 'active', renewals: 0, notes: '' },
  { id: 'k7', tenantId: 't7', roomId: 'r9', start: '2026-03-01', end: '2026-08-05', deposit: 6400, status: 'expiring', renewals: 0, notes: '' },
  { id: 'k8', tenantId: 't8', roomId: 'r16', start: '2025-08-01', end: '2026-11-10', deposit: 8200, status: 'active', renewals: 1, notes: '' },
  { id: 'k9', tenantId: 't9', roomId: 'r4', start: '2024-01-01', end: '2024-08-31', deposit: 5800, status: 'ended', renewals: 0, notes: '' },
  { id: 'k10', tenantId: 't10', roomId: 'r4', start: '2024-09-01', end: '2025-12-31', deposit: 5800, status: 'ended', renewals: 2, notes: '' },
];

export const PAYMENTS = [
  { id: 'pg1', tenantId: 't1', roomId: 'r1', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: '2026-07-04', amount: 6800, method: 'Transferencia', status: 'paid', receipts: ['comprobante_jul.pdf'] },
  { id: 'pg2', tenantId: 't2', roomId: 'r4', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: null, amount: 5800, method: '—', status: 'overdue', receipts: [] },
  { id: 'pg3', tenantId: 't3', roomId: 'r6', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: '2026-07-05', amount: 14500, method: 'Transferencia', status: 'paid', receipts: ['transfer_valeria.png'] },
  { id: 'pg4', tenantId: 't4', roomId: 'r12', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: null, amount: 4800, method: '—', status: 'pending', receipts: [] },
  { id: 'pg5', tenantId: 't5', roomId: 'r14', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: '2026-07-08', amount: 2300, method: 'Efectivo', status: 'partial', receipts: [] },
  { id: 'pg6', tenantId: 't6', roomId: 'r7', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: '2026-07-03', amount: 11200, method: 'Transferencia', status: 'paid', receipts: ['recibo_andres.pdf'] },
  { id: 'pg7', tenantId: 't7', roomId: 'r9', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: null, amount: 6400, method: '—', status: 'overdue', receipts: [] },
  { id: 'pg8', tenantId: 't8', roomId: 'r16', period: 'Julio 2026', dueDate: '2026-07-05', paymentDate: '2026-07-05', amount: 8200, method: 'Tarjeta', status: 'paid', receipts: ['pago_fernando.pdf'] },
  { id: 'pg9', tenantId: 't1', roomId: 'r1', period: 'Junio 2026', dueDate: '2026-06-05', paymentDate: '2026-06-05', amount: 6800, method: 'Transferencia', status: 'paid', receipts: ['comprobante_jun.pdf'] },
  { id: 'pg10', tenantId: 't2', roomId: 'r4', period: 'Junio 2026', dueDate: '2026-06-05', paymentDate: '2026-06-05', amount: 5800, method: 'Transferencia', status: 'paid', receipts: ['jorge_junio.pdf'] },
];

export const BANK_ACCOUNTS = {
  c1: { bank: 'BBVA', holder: 'Laura Méndez Ibarra', clabe: '012180001234567895', account: '01234567895', card: '4152 **** **** 3312', alias: 'Jacaranda — Cta. principal' },
  c2: { bank: 'Santander', holder: 'Diego Torres Reyna', clabe: '014180009876543210', account: '09876543210', card: '5579 **** **** 8841', alias: 'Condesa — Cta. rentas' },
  c3: { bank: 'Banorte', holder: 'Renata Islas Cordero', clabe: '072320005544332211', account: '05544332211', card: '4915 **** **** 2076', alias: 'Encinos — Cta. rentas' },
};

export const ACCOUNT_MOVEMENTS_SEED = {};

export const SERVICES = [
  { id: 'sv1', complexId: 'c1', type: 'Electricidad', provider: 'CFE', contractNumber: 'CFE-88231', meter: '00453321', holder: 'Laura Méndez', frequency: 'Bimestral', dueDate: '2026-08-10', cycle: 'Jul–Ago', status: 'al_corriente', scope: 'Todo el complejo', notes: '' },
  { id: 'sv2', complexId: 'c1', type: 'Internet', provider: 'Totalplay', contractNumber: 'TP-771029', meter: '', holder: 'Laura Méndez', frequency: 'Mensual', dueDate: '2026-08-01', cycle: 'Ago', status: 'pendiente', scope: 'Todo el complejo', notes: '' },
  { id: 'sv3', complexId: 'c1', type: 'Agua', provider: 'SACMEX', contractNumder: '', contractNumber: 'SC-55210', meter: '778812', holder: 'Laura Méndez', frequency: 'Bimestral', dueDate: '2026-09-05', cycle: 'Jul–Ago', status: 'al_corriente', scope: 'Todo el complejo', notes: '' },
  { id: 'sv4', complexId: 'c2', type: 'Electricidad', provider: 'CFE', contractNumber: 'CFE-90211', meter: '00921144', holder: 'Diego Torres', frequency: 'Bimestral', dueDate: '2026-08-14', cycle: 'Jul–Ago', status: 'vencido', scope: 'Todo el complejo', notes: 'Recargo por pago tardío anterior.' },
  { id: 'sv5', complexId: 'c2', type: 'Seguridad', provider: 'Vigilan Seguridad Privada', contractNumber: 'VG-3321', meter: '', holder: 'Diego Torres', frequency: 'Mensual', dueDate: '2026-08-01', cycle: 'Ago', status: 'al_corriente', scope: 'Todo el complejo', notes: '' },
  { id: 'sv6', complexId: 'c3', type: 'Electricidad', provider: 'CFE', contractNumber: 'CFE-44551', meter: '00114422', holder: 'Renata Islas', frequency: 'Bimestral', dueDate: '2026-08-20', cycle: 'Jul–Ago', status: 'al_corriente', scope: 'Todo el complejo', notes: '' },
  { id: 'sv7', complexId: 'c3', type: 'Gas', provider: 'Gas Natural Fenosa', contractNumber: 'GN-9012', meter: '551200', holder: 'Renata Islas', frequency: 'Mensual', dueDate: '2026-08-05', cycle: 'Ago', status: 'pendiente', scope: 'Suite Encinos', notes: '' },
  { id: 'sv8', complexId: 'c3', type: 'Limpieza', provider: 'CleanPro', contractNumber: 'CP-220', meter: '', holder: 'Renata Islas', frequency: 'Quincenal', dueDate: '2026-08-03', cycle: 'Ago', status: 'al_corriente', scope: 'Áreas comunes', notes: '' },
];

export const MAINTENANCE = [
  { id: 'm1', complexId: 'c1', roomId: 'r5', date: '2026-07-22', category: 'Plomería', assignedTo: 'Julio Reparaciones', description: 'Reparación de plafón con filtración de agua.', cost: 2400, status: 'en_progreso' },
  { id: 'm2', complexId: 'c2', roomId: null, date: '2026-07-20', category: 'Jardinería', assignedTo: 'Jardín Verde', description: 'Poda mensual de azotea compartida.', cost: 900, status: 'completado' },
  { id: 'm3', complexId: 'c3', roomId: 'r15', date: '2026-07-24', category: 'Eléctrico', assignedTo: 'Electricistas Zapopan', description: 'Revisión de instalación y pintura de habitación.', cost: 3200, status: 'en_progreso' },
  { id: 'm4', complexId: 'c1', roomId: null, date: '2026-07-10', category: 'Pintura', assignedTo: 'Pinturas del Valle', description: 'Repintado de pasillo del segundo piso.', cost: 1800, status: 'completado' },
  { id: 'm5', complexId: 'c3', roomId: null, date: '2026-08-02', category: 'Plomería', assignedTo: 'Julio Reparaciones', description: 'Revisión preventiva de tinacos.', cost: 0, status: 'programado' },
  { id: 'm6', complexId: 'c2', roomId: 'r10', date: '2026-08-05', category: 'Limpieza profunda', assignedTo: 'CleanPro', description: 'Limpieza previa a nueva ocupación.', cost: 700, status: 'programado' },
];

export const INCIDENTS = [
  { id: 'i1', complexId: 'c1', roomId: 'r4', category: 'Ruido', priority: 'media', status: 'abierto', assignedTo: 'Laura Méndez', description: 'Queja de ruido después de las 23:00.', comments: 2 },
  { id: 'i2', complexId: 'c2', roomId: 'r9', category: 'Plomería', priority: 'alta', status: 'en_progreso', assignedTo: 'Diego Torres', description: 'Fuga en el lavabo del baño compartido.', comments: 3 },
  { id: 'i3', complexId: 'c3', roomId: null, category: 'Daños', priority: 'baja', status: 'resuelto', assignedTo: 'Renata Islas', description: 'Rayón en puerta de acceso principal.', comments: 1 },
  { id: 'i4', complexId: 'c1', roomId: 'r1', category: 'Eléctrico', priority: 'media', status: 'abierto', assignedTo: 'Laura Méndez', description: 'Contacto flojo en la habitación.', comments: 0 },
  { id: 'i5', complexId: 'c2', roomId: null, category: 'Limpieza', priority: 'baja', status: 'abierto', assignedTo: 'Diego Torres', description: 'Falta reponer insumos de limpieza en azotea.', comments: 0 },
];

export const DOCUMENTS = [
  { id: 'd1', category: 'Contratos', name: 'Contrato_SofiaRamirez_2025.pdf', relatedTo: 'Sofía Ramírez Cuevas', date: '2025-12-01' },
  { id: 'd2', category: 'Contratos', name: 'Contrato_JorgeNieto_2026.pdf', relatedTo: 'Jorge Alberto Nieto', date: '2026-01-15' },
  { id: 'd3', category: 'Identificaciones', name: 'INE_ValeriaOchoa.jpg', relatedTo: 'Valeria Ochoa Prieto', date: '2025-06-01' },
  { id: 'd4', category: 'CURP', name: 'CURP_MiguelSoto.pdf', relatedTo: 'Miguel Ángel Soto', date: '2025-09-01' },
  { id: 'd5', category: 'Comprobantes de domicilio', name: 'ComprobanteCFE_KarlaJimenez.pdf', relatedTo: 'Karla Jiménez Rosales', date: '2026-02-01' },
  { id: 'd6', category: 'Pagarés', name: 'Pagare_AndresVillasenor.pdf', relatedTo: 'Andrés Villaseñor', date: '2025-11-01' },
  { id: 'd7', category: 'Recibos de pago', name: 'Recibo_Julio2026_Fernando.pdf', relatedTo: 'Fernando Castillo Ruiz', date: '2026-07-05' },
  { id: 'd8', category: 'Fotos de inspección', name: 'Inspeccion_Encinos3_202607.jpg', relatedTo: 'Encinos 3', date: '2026-07-15' },
];

export const NOTIFICATIONS = [
  { id: 'n1', text: 'Pago vencido: Jorge Nieto — Hab. 202', time: 'hace 2 h', type: 'overdue' },
  { id: 'n2', text: 'Nuevo prospecto interesado en Estudio Jacaranda Sur', time: 'hace 4 h', type: 'prospect' },
  { id: 'n3', text: 'Contrato de Karla Jiménez vence en 27 días', time: 'hoy', type: 'contract' },
  { id: 'n4', text: 'Mantenimiento completado en Casa Mirador Condesa', time: 'ayer', type: 'maintenance' },
];

export const ACTIVITY = [
  { id: 'a1', user: 'Laura Méndez', action: 'Registró el pago de Julio de Fernando Castillo', date: '27 jul, 10:14' },
  { id: 'a2', user: 'Diego Torres', action: 'Subió comprobante de pago de Andrés Villaseñor', date: '27 jul, 09:02' },
  { id: 'a3', user: 'Renata Islas', action: 'Actualizó el estado de Encinos 3 a "Mantenimiento"', date: '26 jul, 18:40' },
  { id: 'a4', user: 'Laura Méndez', action: 'Asignó a Jorge Nieto en Habitación 202', date: '25 jul, 12:20' },
  { id: 'a5', user: 'Diego Torres', action: 'Cerró el contrato de Maria García', date: '31 dic, 09:00' },
];

export const CALENDAR_EVENTS = [
  { id: 'ev1', title: 'Pago de renta — Jorge Nieto', date: '2026-07-28', type: 'payment' },
  { id: 'ev2', title: 'Visita de Regina Uribe — Estudio Jacaranda Sur', date: '2026-07-30', type: 'visit' },
  { id: 'ev3', title: 'Vence contrato — Karla Jiménez', date: '2026-08-25', type: 'contract' },
  { id: 'ev4', title: 'Pago de servicio — Internet Totalplay', date: '2026-08-01', type: 'service' },
  { id: 'ev5', title: 'Mantenimiento preventivo — Tinacos Encinos', date: '2026-08-02', type: 'maintenance' },
];
