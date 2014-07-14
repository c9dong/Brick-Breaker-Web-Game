<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="RegisterPage.aspx.cs" Inherits="WebApplication2.RegisterPage" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <div id="content" style="height:640px; width:1024px">

        <input id="UserNameBox" type="text" />
        <input id="PasswordBox" type="text" />
        <input id="SubmitBtn" type="button" value="Submit" />
        <input id="ResetBtn" type="button" value="Reset" />

    </div>
</asp:Content>
