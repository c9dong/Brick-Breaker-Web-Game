<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="LoginPage.aspx.cs" Inherits="WebApplication2.LoginPage" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <div id="content">
        <input id="UserNameBox" runat="server" type="text" />
        <input id="PasswordBox" runat="server" type="password" />
        <button id="LoginBtn" runat="server" onserverclick="onLoginBtnClick">Sign in</button>
        <p id="WarningMessage" runat="server"></p>
    </div>
</asp:Content>
