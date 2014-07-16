<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="HomePage.aspx.cs" Inherits="WebApplication2.HomePage" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <div>
        <button id="LoginBtn" runat="server" onserverclick="LoginBtnClick">Login in</button>
        <button id="RegisterBtn" runat="server" onserverclick="RegisterBtnClick">Register</button>
    </div>
</asp:Content>
