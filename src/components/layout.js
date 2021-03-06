import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Loader, Nav, Social, Email, Footer } from '@components';
import { navLinks } from '@config';
import styled from 'styled-components';
import { GlobalStyle, theme } from '@styles';
const { colors, fontSizes, fonts } = theme;

const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:hover {
    background-color: ${colors.darkGrey};
  }
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.green};
    background-color: ${colors.lightNavy};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.small};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
  };

  state = {
    isLoading: true,
    githubInfo: {
      stars: null,
      forks: null,
    },
  };

  finishLoading = () => this.setState({ isLoading: false });

  componentDidMount() {
    fetch('https://api.github.com/repos/chen1649chenli/my_personal_site')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        this.setState({
          githubInfo: {
            stars: stargazers_count,
            forks: forks_count,
          },
        });
      });
  }

  render() {
    const { children, location } = this.props;
    const { isLoading, githubInfo } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }
          }
        `}
        render={({ site }) => (
          <div id="root">
            <Head metadata={site.siteMetadata} />

            <GlobalStyle />

            <SkipToContent href="#content">Skip to Content</SkipToContent>

            {isLoading ? (
              <Loader finishLoading={this.finishLoading} />
            ) : (
              <div className="container">
                {location && navLinks && <Nav location={location} navLinks={navLinks} />}
                <Social />
                <Email />
                {children}
                <Footer githubInfo={githubInfo} />
              </div>
            )}
          </div>
        )}
      />
    );
  }
}

export default Layout;
