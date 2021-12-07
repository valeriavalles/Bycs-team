using ApiRestByCs.Dominio;
using ApiRestByCs.Persintencia;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Threading.Tasks;
using UsuarioServiceReference;


namespace ApiRestByCs.Controllers
{
    [Route("api/servicio")]  //Ruta  para invocar   desde  la app que consume 
    [ApiController]
    public class ServiciosController : ControllerBase
    {

        private ServicioDAO servicioDAO = new ServicioDAO();
        // GET: api/Servicios
        [HttpGet]
        public List<Servicio> Get()
        {
            List<Servicio> servicios = servicioDAO.obtener("1");
            return servicios;
        }

        // POST: api/Servicios 
        [HttpPost]
        public async Task<Servicio> Post(Servicio servicio)
        {
            Servicio objServicio = servicioDAO.agregar(servicio);
            return objServicio;
        }

    }
}
