import { useEffect, useState } from 'react'
import { reservaDemo } from '../data/initialData'
export function useReservations(setMensaje){
  const [reservas,setReservas]=useState(()=>{const x=localStorage.getItem('la-mesa-reservas');return x?JSON.parse(x):[reservaDemo]})
  useEffect(()=>localStorage.setItem('la-mesa-reservas',JSON.stringify(reservas)),[reservas])
  const crearReserva=(s)=>{const codigo=`RSV-${String(1027+reservas.length).padStart(4,'0')}`;const nueva={...s,codigo,contacto:s.correo||s.telefono,adelanto:s.mesas.length*100,estado:'Activa'};setReservas(r=>[...r,nueva]);setMensaje(`Reserva ${codigo} confirmada correctamente.`);return codigo}
  const cancelarReserva=(codigo)=>{setReservas(rs=>rs.map(r=>r.codigo===codigo?{...r,estado:'Cancelada',reembolso:'Disponible'}:r));setMensaje(`Reserva ${codigo} cancelada correctamente.`)}
  const solicitarReembolso=(codigo)=>{setReservas(rs=>rs.map(r=>r.codigo===codigo?{...r,reembolso:'Pendiente'}:r));setMensaje(`Solicitud de reembolso para ${codigo} enviada correctamente.`)}
  const procesarReembolso=(codigo)=>{setReservas(rs=>rs.map(r=>r.codigo===codigo?{...r,reembolso:'Procesado'}:r));setMensaje(`Reembolso de ${codigo} procesado correctamente.`)}
  return {reservas,crearReserva,cancelarReserva,solicitarReembolso,procesarReembolso}
}
