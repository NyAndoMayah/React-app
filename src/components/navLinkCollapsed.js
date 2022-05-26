import React from "react";
export function NavLinkCollapsed(props){
    const {wordsInsideTheLink,icon,dataBsTarget,ariaControls } = props;
    return(
        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded="false" aria-controls={ariaControls}>
                      <div class="sb-nav-link-icon"><i class={icon}></i></div>
                      {wordsInsideTheLink}
                      <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
    );
}