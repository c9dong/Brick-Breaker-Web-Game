<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="RegisterPage.aspx.cs" Inherits="WebApplication2.RegisterPage" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <div id="content" style="height:640px; width:1024px">

        

        <asp:TextBox ID="UserNameBox" runat="server" Text=""></asp:TextBox>
        <asp:TextBox ID="PasswordBox" runat="server" Text=""></asp:TextBox>
        <asp:Button ID="SubmitBtn" runat="server" Text="Submit" OnClick="onSubmitBtnClick"/>
        <asp:Button ID="ResetBtn" runat="server" Text="Reset" OnClick="onResetBtnClick"/>

        

    </div>
</asp:Content>
