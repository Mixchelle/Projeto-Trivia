import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { image, name, score } = this.props;
    return (
      <div>
        <img
          src={ image }
          alt={ name }
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player">{ name }</p>
        <p data-testid="header-profile-picture">{ score }</p>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  image: player.image,
  name: player.name,
  score: player.score,
});

Header.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
