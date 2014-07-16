using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication2
{
    public partial class HomePage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void LoginBtnClick(Object sender, EventArgs e)
        {
            Response.Redirect("LoginPage.aspx");
        }

        protected void RegisterBtnClick(Object sender, EventArgs e)
        {
            Response.Redirect("RegisterPage.aspx");
        }
    }
}