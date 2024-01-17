<template>

<header>
        <div id="stuck_container" class="stuck_container">
            <nav class="navbar navbar-default navbar-static-top ">
                <div>
                    <div class="navbar-header">

                        <a data-type='rd-navbar-brand' href="/">
                            <img class="h-logo-height ng-tns-c67-0 " alt="The humanresources REPORT"
                                src="https://humanresources.report/images/humanresources.report.png">
                        </a>

                    </div>

                    <div class="col-md-5 p-0 d-none d-md-block ng-tns-c67-0 ng-star-inserted HeadPopUp"
                        style="font-size: 20px;">
                        <p class="header-title para-4 mb-2 pb-1 mt-3 pt-3 pt-1 text-uppercase ng-tns-c67-0">WELCOME TO The
                            humanresources REPORT</p>
                        <p class="mb-0 mt-10 text-uppercase text-sm-left ng-tns-c67-0">
                            <span class="a-tag-header ng-tns-c67-0">

                                <a href="" id="opennewsletterPopupButton" data-toggle="modal"
                                    data-target="#NewsLetterSignUpModel" class="text-dark ng-tns-c67-0">Newsletter</a>
                            </span>| <span class="a-tag-header ng-tns-c67-0">

                                <a href="" id="openLoginPopupButton" class="text-dark ng-tns-c67-0" data-toggle="modal"
                                    data-target="#MemberLoginModel">Member Login</a>

                            </span>|
                            <span class="a-tag-header ng-tns-c67-0">
                                <a href="" onclick="clearValidators();" data-toggle="modal" data-target="#MemberSignUpModel"
                                    class="text-dark ng-tns-c67-0" id="demoSignup">Signup</a>
                            </span>
                        </p>
                    </div>


                    <ul class="navbar-nav sf-menu navbar-right" data-type="navbar">




                        <li class="dropdown">
                            <a href="/news">
                                <span>NEWS</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Router-Link to="/news/topstories">Top Stories</Router-Link>
                                </li>
                                <li>
                                    <a href="/news/trending-news">Latest</a>
                                </li>

                            </ul>
                        </li>
                        <li class="dropdown" runat="server" id="eventsMenu">
                            <a href="/events">
                                <span>EVENTS</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li runat="server" id="upcommingConferencesMenuItem">
                                    <a href="/events/upcoming-conferences">Upcoming Conferences</a>
                                </li>
                                <li runat="server" id="pastConferencesMenuItem">
                                    <a href="/events/past-conferences">Past Conferences</a>
                                </li>
                                <li runat="server" id="liveWebinarsMenuItem">
                                    <a href="/events/live-webinars">Live Webinars</a>
                                </li>
                                <li runat="server" id="onDemandWebinarsMenuItem">
                                    <a href="/events/on-demand-webinars">On-Demand Webinars</a>
                                </li>
                            </ul>
                        </li>


                        <li class="dropdown">
                            <a href="/companies">
                                <span>COMPANIES</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                               
                                    <Router-Link to="/c-suite-on-deck">C-Suite On Deck </Router-Link>
                                </li>
                                <li>
                                    <a href="/thought-leaders">Thought Leaders</a>
                                </li>
                                <li>
                                    <a href="/guest-contributors">Guest Contributors</a>
                                </li>
                            </ul>
                        </li>



                        <li class="dropdown">
                            <a href="/resources">
                                <span>RESOURCES</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="/resources/articles">Articles</a>
                                </li>
                                <li>
                                    <a href="/resources/videos">Videos</a>
                                </li>
                                <li>
                                    <a href="/resources/whitepapers">Whitepapers</a>
                                </li>
                                <li>
                                    <a href="/resources/infographics">Infographics</a>
                                </li>
                                <li>
                                    <a href="/resources/webinars">Webinar</a>
                                </li>

                            </ul>
                        </li>

                        <li>
                            <div _ngcontent-angular-starter-c67=""
                                class="col-md-1 col-1 p-0 search-mob-view order-md-12 ng-tns-c67-0">
                                <div _ngcontent-angular-starter-c67=""
                                    class="search float-right t-45 ng-tns-c67-0 ml-19 mr--5">

                                    <div _ngcontent-angular-starter-c67=""
                                        class="search-circle float-right ng-tns-c67-0 btnSearchDiv" id="btnSearchDiv"
                                        onclick="DesktopSearch()">
                                        <i id="btnSearch" _ngcontent-angular-starter-c67=""
                                            class="fa fa-search text-white btnSearchClassCustomAnk"></i>
                                    </div>
                                    <div _ngcontent-angular-starter-c67="" class="search-box ng-tns-c67-0">
                                        <input _ngcontent-angular-starter-c67="" id="txtSearch" type="text"
                                            class="openClose search-panel ng-tns-c67-0 ng-trigger ng-trigger-openClose"
                                            style="display: none; font-weight: normal;" onkeydown="DesktopSearch_demo()">
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>



</header>
</template>

<script >
export default{
    name:'MyHeader'
  
}
</script>

