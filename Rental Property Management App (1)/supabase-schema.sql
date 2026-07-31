-- Rental Property Management App — Supabase schema
-- Run this once in the Supabase SQL editor (project jrunfxkimcxzqqgssayf) before wiring persistence.

create table complexes (
  id text primary key,
  name text not null,
  address text,
  maps_link text,
  manager text,
  phone text,
  notes text,
  created_at timestamptz default now()
);

create table rooms (
  id text primary key,
  complex_id text references complexes(id) on delete cascade,
  number text,
  name text,
  floor int,
  type text,
  size numeric,
  rent numeric,
  deposit numeric,
  included text[] default '{}',
  furnished boolean default false,
  status text default 'available',
  available_from date,
  contract_end date,
  tags text[] default '{}',
  description text,
  created_at timestamptz default now()
);

create table tenants (
  id text primary key,
  name text not null,
  initials text,
  curp text,
  rfc text,
  birth_date date,
  phone text,
  whatsapp text,
  email text,
  occupation text,
  employer text,
  active boolean default true,
  room_id text references rooms(id),
  move_in date,
  move_out date,
  notes text,
  emergency_name text,
  emergency_relation text,
  emergency_phone text,
  emergency_address text,
  created_at timestamptz default now()
);

create table tenant_history (
  id bigint generated always as identity primary key,
  tenant_id text references tenants(id) on delete cascade,
  room_id text references rooms(id),
  start_date date,
  end_date date
);

create table prospects (
  id text primary key,
  name text,
  phone text,
  whatsapp text,
  interested_room text references rooms(id),
  visit_date date,
  status text default 'new',
  notes text,
  created_at timestamptz default now()
);

create table contracts (
  id text primary key,
  tenant_id text references tenants(id),
  room_id text references rooms(id),
  start_date date,
  end_date date,
  deposit numeric,
  status text default 'active',
  renewals int default 0,
  notes text,
  created_at timestamptz default now()
);

create table payments (
  id text primary key,
  tenant_id text references tenants(id),
  room_id text references rooms(id),
  period text,
  due_date date,
  payment_date date,
  amount numeric,
  method text,
  status text default 'pending',
  created_at timestamptz default now()
);

create table payment_receipts (
  id bigint generated always as identity primary key,
  payment_id text references payments(id) on delete cascade,
  file_name text,
  file_url text
);

create table services (
  id text primary key,
  complex_id text references complexes(id),
  type text,
  provider text,
  contract_number text,
  meter text,
  holder text,
  frequency text,
  due_date date,
  cycle text,
  status text default 'al_corriente',
  scope text,
  notes text,
  created_at timestamptz default now()
);

create table maintenance (
  id text primary key,
  complex_id text references complexes(id),
  room_id text references rooms(id),
  date date,
  category text,
  assigned_to text,
  description text,
  cost numeric default 0,
  status text default 'programado',
  created_at timestamptz default now()
);

create table incidents (
  id text primary key,
  complex_id text references complexes(id),
  room_id text references rooms(id),
  category text,
  priority text default 'media',
  status text default 'abierto',
  assigned_to text,
  description text,
  comments int default 0,
  created_at timestamptz default now()
);

create table documents (
  id text primary key,
  category text,
  name text,
  related_to text,
  date date,
  file_url text
);

create table accounts (
  id text primary key,
  type text default 'bank', -- 'bank' | 'cash'
  complex_id text references complexes(id),
  room_ids text[] default '{}',
  bank text,
  holder text,
  clabe text,
  account_number text,
  alias text,
  balance numeric default 0,
  created_at timestamptz default now()
);

create table account_movements (
  id bigint generated always as identity primary key,
  account_id text references accounts(id) on delete cascade,
  date date default current_date,
  amount numeric,
  type text, -- 'deposit' | 'withdrawal'
  note text,
  created_at timestamptz default now()
);

-- Row Level Security: enable and allow the anon key full access for now
-- (tighten later once there is real auth / multiple property managers).
alter table complexes enable row level security;
alter table rooms enable row level security;
alter table tenants enable row level security;
alter table tenant_history enable row level security;
alter table prospects enable row level security;
alter table contracts enable row level security;
alter table payments enable row level security;
alter table payment_receipts enable row level security;
alter table services enable row level security;
alter table maintenance enable row level security;
alter table incidents enable row level security;
alter table documents enable row level security;
alter table accounts enable row level security;
alter table account_movements enable row level security;

create policy "anon full access" on complexes for all using (true) with check (true);
create policy "anon full access" on rooms for all using (true) with check (true);
create policy "anon full access" on tenants for all using (true) with check (true);
create policy "anon full access" on tenant_history for all using (true) with check (true);
create policy "anon full access" on prospects for all using (true) with check (true);
create policy "anon full access" on contracts for all using (true) with check (true);
create policy "anon full access" on payments for all using (true) with check (true);
create policy "anon full access" on payment_receipts for all using (true) with check (true);
create policy "anon full access" on services for all using (true) with check (true);
create policy "anon full access" on maintenance for all using (true) with check (true);
create policy "anon full access" on incidents for all using (true) with check (true);
create policy "anon full access" on documents for all using (true) with check (true);
create policy "anon full access" on accounts for all using (true) with check (true);
create policy "anon full access" on account_movements for all using (true) with check (true);
