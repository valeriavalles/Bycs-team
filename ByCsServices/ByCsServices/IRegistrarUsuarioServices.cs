using ByCsServices.Entidad;
using ByCsServices.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace ByCsServices
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de interfaz "IRegistrarUsuarioServices" en el código y en el archivo de configuración a la vez.
    [ServiceContract]
    public interface IRegistrarUsuarioServices
    {
        [OperationContract]
        void DoWork();

        [OperationContract]
        Usuario agregarUsuario(Usuario usuario);
    }

}
