using ApiRestByCs.Dominio;
using ApiRestByCs.Persintencia;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Threading.Tasks;
using UsuarioServiceReference;

namespace ApiRestByCs.Controllers
{
    [Route("api/solicitud")]  //Ruta  para invocar   desde  la app que consume 
    [ApiController]
    public class SolicitudController : ControllerBase
    {
        private SolicitudDAO solicitudDAO = new SolicitudDAO();
        private EnvioMensaje mensaje = new EnvioMensaje();

        // POST: api/Solicitud
        [HttpPost("envioSolicitud")]
        public async Task<Solicitud> Post(Solicitud solicitud)
        {
            Solicitud objSolicitud = solicitudDAO.agregar(solicitud);
            return objSolicitud;
        }

        // POST: api/Solicitud
        [HttpPost("registrar")]
        public async Task<IActionResult> PostSolicitud(Solicitud solicitud)
        {
            var objSolicitud = await solicitudDAO.registrarSolicitud(solicitud);
            if (objSolicitud.status == "success")
            {

                var Obtener = await solicitudDAO.listaEnvio(int.Parse(objSolicitud.detalle));
                //enviar mensaje
                var sms = mensaje.enviarSMS(Obtener);

            }
            var obj = JsonConvert.SerializeObject(objSolicitud);
            return Ok(obj);
        }
    }
}
