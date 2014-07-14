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
            //User u = new User();
            //u.Create_Date = System.DateTime.Now;
            //u.Password = "11111";
            //u.User_Name = "David";

            //PlayerEntities ctx = new PlayerEntities();
            //ctx.Users.Add(u);
            //ctx.SaveChanges();

        }
        protected void onSubmitBtnClick(Object sender, EventArgs e)
        {
            userName = UserNameBox.Text.ToString();
            password = PasswordBox.Text.ToString();
            User newUser = new User();
            newUser.Create_Date = System.DateTime.Now;
            newUser.Password = password;
            newUser.User_Name = userName;
            playerEntity.Users.Add(newUser);
            playerEntity.SaveChanges();
        }
        protected void onResetBtnClick(Object sender, EventArgs e)
        {
            UserNameBox.Text = "";
            PasswordBox.Text = "";
        }
    }
}