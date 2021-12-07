using ApiRestByCs.Dominio;
using ApiRestByCs.Persintencia;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiRestByCs.Controllers
{
    [Route("api/auth")]  //Ruta  para invocar   desde  la app que consume 
    [ApiController]
    public class AuthController : ControllerBase
    {
        private AuthDAO authDAO = new AuthDAO();

        // POST: api/Servicios 
        [HttpPost]
        public async Task<Auth> Post(Auth auth)
        {
            Auth objAuth = authDAO.obtener(auth);
            return objAuth;
        }
    }
}
