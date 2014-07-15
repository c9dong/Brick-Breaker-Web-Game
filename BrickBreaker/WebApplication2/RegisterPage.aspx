<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="RegisterPage.aspx.cs" Inherits="WebApplication2.RegisterPage" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <div id="content" style="height:640px; width:1024px">

        <input id="UserNameBox" runat="server" type="text" />
        <input id="PasswordBox" runat="server" type="password" />
        <button id="SubmitBtn" runat="server" onServerClick="onSubmitBtnClick">Submit</button>
        <button id="ResetBtn" runat="server" onserverclick="onResetBtnClick">Reset</button>
        

    </div>
</asp:Content>