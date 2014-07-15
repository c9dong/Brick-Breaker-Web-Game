using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication2.EntityModel;

namespace WebApplication2
{
    public partial class RegisterPage : System.Web.UI.Page
    {
        private string userName;
        private string password;
        private PlayerEntities playerEntity = new PlayerEntities();

        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void onSubmitBtnClick(Object sender, EventArgs e)
        {
            userName = UserNameBox.Value.ToString();
            password = PasswordBox.Value.ToString();
            User newUser = new User();
            newUser.Create_Date = System.DateTime.Now;
            newUser.Password = password;
            newUser.User_Name = userName;
            playerEntity.Users.Add(newUser);
            playerEntity.SaveChanges();
        }
        protected void onResetBtnClick(Object sender, EventArgs e)
        {
            UserNameBox.Value = "";
            PasswordBox.Value = "";
        }
    }
}