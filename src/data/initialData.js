export const mesasIniciales=[
...Array.from({length:8},(_,i)=>({id:`M0${i+1}`,ambiente:'Principal',bloqueada:i===1,ocupada:false})),
...Array.from({length:4},(_,i)=>({id:`V0${i+1}`,ambiente:'VIP',bloqueada:false,ocupada:false})),
...Array.from({length:6},(_,i)=>({id:`T0${i+1}`,ambiente:'Terraza',bloqueada:false,ocupada:false}))]
export const reservaDemo={codigo:'RSV-1026',nombre:'Martita Torres',contacto:'martita@email.com',fecha:'2026-10-28',hora:'13:00',ambiente:'Principal',mesas:['M03','M04'],adelanto:200,estado:'Activa',reembolso:null}
export const reclamacionDemo={codigo:'REC-001',reserva:'RSV-1026',asunto:'Tiempo de atención',detalle:'Solicitud académica de demostración.',estado:'Recibida',fecha:'2026-10-28'}
export const seleccionInicial={fecha:'2026-10-28',hora:'13:00',ambiente:'Principal',mesas:[],nombre:'',telefono:'',correo:'',acepta:false}
