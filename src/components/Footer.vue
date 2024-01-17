<template>
<footer class="page-footer font-small blue pt-4 mt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="col-12 border-top border-color-gray"></div>
                    <div class="row row11">
                        <div class="col-md-3 mt-md-0 pt-md-3">
                            <a href="https://humanresources.report/" class="para-5 footer-para-2-c-2 cursor-p">
                                <img routerlink="/" class="footer-logo mt-3" tabindex="0" ng-reflect-router-link="/" alt="The humanresources REPORT" src="https://humanresources.report/images/humanresources.report.png">
                            </a>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-3 text-center mt-4 email-input">

                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" ValidationGroup="SubGrp" Display="Dynamic" ForeColor="Red"
                                runat="server" ControlToValidate="txtEmailSub" ErrorMessage="- Missing Field: Email Address">*Required
                            </asp:RequiredFieldValidator>

                            <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ControlToValidate="txtEmailSub" Display="Dynamic"
                                ValidationGroup="SubGrp" ValidationExpression="^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                                ErrorMessage="- Invalid Email Address">Invalid Email</asp:RegularExpressionValidator>
                            <br />
                            <asp:TextBox runat="server" ID="txtEmailSub" ValidationGroup="SubGrp"
                                placeholder="*EMAIL" CssClass="mb-1 p-1 mt-2 para-3 ng-pristine ng-invalid ng-touched" Style="border: 0px; background-color: var(--Gray4); width: 284px; height: 34px; text-align: center;"></asp:TextBox>

                            <asp:Button runat="server" ValidationGroup="SubGrp" CssClass="thm-btn btn-theme-success p-2 pl-5 pr-5 text-uppercase border-1 mt-1 mb-1"
                                Text="Newsletter Signup" ID="btnNewsletterSignupFooter"
                                Style="padding: 6px 55px !important;" OnClick="btnNewsletterSignupFooter_Click"
                                OnClientClick="bottom_newslettersignupclick();" />

                            <p><a href="https://media7.com/do-not-sell-my-information" target="_blank" class="para-2 para-2-c-2 text-uppercase">do not sell my personal information</a></p>
                        </div>
                        <div class="col-md-3 mb-md-0 mb-3 pl-md-5 mt-2 WrapperDiv">
                            <ul class="footer-menu-list list-unstyled ml-md-5 pl-md-1 mt-md-4">
                                <li><a href="https://media7.com/contact-us" target="_blank" class="para-5 footer-para-2-c-2 cursor-p">Advertise With Us</a>
                                </li>
                                <li>
                                    <a data-toggle="modal" data-target="#MemberLoginModel" class="para-5 footer-para-2-c-2 cursor-p">Member Login</a>
                                </li>
                                <li>
                                    <a href="/privacy-policy" class="para-5 footer-para-2-c-2 cursor-p">Privacy</a>
                                </li>
                                <li>
                                    <a href="/cookies" class="para-5 footer-para-2-c-2 cursor-p">Cookies</a>
                                </li>
                                <li>
                                    <a href="/terms-and-service" class="para-5 footer-para-2-c-2 cursor-p">Terms</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-2 mb-md-0 mb-3 social-round-icon">
                            <p class="para-5 para-2-c-2 mb-1 mt-5">Connect With Us</p>

                            <a target="_blank" href="https://www.linkedin.com/company/humanresources-report"><i class="fab fa-linkedin-in"></i></a>

                            <a target="_blank" href="https://twitter.com/report_humanresources"><i class="fab fa-twitter"></i></a>

                            <a target="_blank" href="https://www.facebook.com/humanresources.report"><i class="fab fa-facebook-f"></i></a>
                        </div>
                    </div>

                    <app-scroll-top _nghost-angular-starter-c69="">
                        <div _ngcontent-angular-starter-c69="" class="scroll-to-top show-scrollTop" ng-reflect-ng-class="[object Object]">
                            <button _ngcontent-angular-starter-c69="" type="button" data-toggle="button" aria-pressed="true" class="btn active">
                                <i _ngcontent-angular-starter-c69="" class="fas fa-chevron-up"></i>                                                                                                                                          
                            </button>
                        </div>
                    </app-scroll-top>

                </div>
                <div class="footer-copyright text-center py-4 mt-3 text-white">
    Copyright © {{ currentYear }}&nbsp;
    <router-link to="/" class="text-white">The humanresources Report</router-link>
    &nbsp;| All Rights Reserved
  </div>
            </footer>
    </template>
    
    <script >
    export default{
        name:'MyFooter',
        data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
    }
    </script>