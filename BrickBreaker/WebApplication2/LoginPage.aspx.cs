using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication2.EntityModel;

namespace WebApplication2
{
    public partial class LoginPage : System.Web.UI.Page
    {
        private string userName;
        private string password;
        private PlayerEntities playerEntity;

        protected void Page_Load(object sender, EventArgs e)
        {
            playerEntity = new PlayerEntities();
        }

        protected void onLoginBtnClick(Object sender, EventArgs e)
        {
            userName = UserNameBox.Value.ToString();
            password = PasswordBox.Value.ToString();

            var availableUser = from name in playerEntity.Users
                                where name.User_Name == userName
                                select name;
            

            if (availableUser.Count() != 0)
            {
                var checkPass = from pass in playerEntity.Users
                                where pass.User_Name == userName && pass.Password == password
                                select pass;
                if (checkPass.Count() != 0)
                {
                    Response.Redirect("GamePage.aspx");
                }
                else
                {
                    WarningMessage.InnerText = "Wrong password";
                }
            }
            else
            {
                WarningMessage.InnerText = "Wrong user name";
            }
        }
    }
}