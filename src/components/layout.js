import React from "react";
import { Location } from "@reach/router";
import Link from "gatsby-link";

import typography from "../utils/typography";

class Template extends React.Component {
  render() {
    const { children } = this.props;
    let header;

    let rootPath = `/`;

    return (
      <Location>
        {({ location }) => {
          if (location.pathname === rootPath) {
            header = (
              <h1
                style={{
                  ...typography.scale(1.5),
                  marginBottom: typography.rhythm(1.5),
                  marginTop: 0
                }}
              >
                <Link
                  style={{
                    boxShadow: "none",
                    textDecoration: "none",
                    color: "inherit"
                  }}
                  to={"/"}
                >
                  unstack.in
                </Link>
              </h1>
            );
          } else {
            header = (
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  marginTop: 0,
                  marginBottom: typography.rhythm(-1)
                }}
              >
                <Link
                  style={{
                    boxShadow: "none",
                    textDecoration: "none",
                    color: "inherit"
                  }}
                  to={"/"}
                >
                  unstack.in
                </Link>
              </h3>
            );
          }
          return (
            <div
              style={{
                maxWidth: typography.rhythm(24),
                padding: `${typography.rhythm(1.5)} ${typography.rhythm(
                  3 / 4
                )}`,
                margin: "auto"
              }}
            >
              {header}
              {children}
            </div>
          );
        }}
      </Location>
    );
  }
}

export default Template;
