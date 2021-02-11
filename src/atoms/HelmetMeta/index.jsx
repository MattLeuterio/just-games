import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const HelmetMeta = ({ titlePage, path, description }) => {
  return (
    /**
     * TODO:
     * Add meta-description
     * Add image -> only for game and category pages
     *
     */
    <Helmet>
      <meta charSet="utf-8" />
      <title>{titlePage}</title>
      <link rel="canonical" href={`http://justgames.com${path}`} />
      <meta name="description" content={description} />
    </Helmet>
  );
};

HelmetMeta.defaultProps = {};

HelmetMeta.propTypes = {
  titlePage: PropTypes.string,
  path: PropTypes.string,
};

export default HelmetMeta;
