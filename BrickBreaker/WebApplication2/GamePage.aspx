<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="GamePage.aspx.cs" Inherits="WebApplication2.GamePage" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="GamePageContent" ContentPlaceHolderId="body" runat="server">
    <div>
         <canvas id="gamePage" width="1024" height="640">
            <script src="JavaScript/Bar.js" type="text/javascript"></script>
            <script src="JavaScript/Ball.js" type="text/javascript"></script>
            <script src="JavaScript/BaseBrick.js" type="text/javascript"></script>
            <script src="JavaScript/DoubleBrick.js" type="text/javascript"></script>
            <script src="JavaScript/Main.js" type="text/javascript"></script>
        </canvas>
    </div>
</asp:Content>