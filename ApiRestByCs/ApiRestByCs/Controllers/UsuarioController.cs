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
    [Route("api/user")]  //Ruta  para invocar   desde  la app que consume 
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        //Referencia al Servicio Soap de Usuarios
        public readonly string serviceUrl = "http://localhost:50717/RegistrarUsuarioServices.svc";
        public readonly EndpointAddress endpointAddress;
        public readonly BasicHttpBinding basicHttpBinding;

        private RegistrarUsuarioServicesClient objRegUsuario = new RegistrarUsuarioServicesClient();
        public UsuarioController()
        {
            endpointAddress = new EndpointAddress(serviceUrl);

            basicHttpBinding =
                new BasicHttpBinding(endpointAddress.Uri.Scheme.ToLower() == "http" ?
                            BasicHttpSecurityMode.None : BasicHttpSecurityMode.Transport);

            //Para establecer tiempo de espera 
            basicHttpBinding.OpenTimeout = TimeSpan.MaxValue;
            basicHttpBinding.CloseTimeout = TimeSpan.MaxValue;
            basicHttpBinding.ReceiveTimeout = TimeSpan.MaxValue;
            basicHttpBinding.SendTimeout = TimeSpan.MaxValue;
        }
        public async Task<RegistrarUsuarioServicesClient> GetInstanceAsync()
        {
            return await Task.Run(() => new RegistrarUsuarioServicesClient(basicHttpBinding, endpointAddress));
        }

        // POST: api/Usuarios
        [HttpPost]
        public async Task<UsuarioServiceReference.Usuario> Post(UsuarioServiceReference.Usuario usuario)
        {
            var client = await GetInstanceAsync();
            var response = await client.agregarUsuarioAsync(usuario);
            return response;
        }


        // GET: api/Usuarios
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "metodoget_usuario", "metodoget_usuario2" };
        }

        // GET: api/Usuarios/5
        //[HttpGet("{id}", Name = "GetProducto")]
        //public List<ProductosProveedor> Get(int id)
        //{
        //    List<ProductosProveedor> productosProveedors = proveedorDAO.obtener(id);

        //    return productosProveedors;
        //}

        // POST: api/Usuarios
        //[HttpPost]
        //public Usuario Post([FromBody] Usuario objuser)
        //{
        //    UsuarioServiceReference.Usuario obj = new UsuarioServiceReference.Usuario();
        //    obj.nombres = objuser.nombres;
        //    return objRegUsuario.agregarUsuarioAsync(obj);
        //    //return objuser;
        //}



    }
}


