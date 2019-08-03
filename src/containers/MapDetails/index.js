import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MapDetail from '../../components/MapDetail/';
import EmptyResults from '../../components/EmptyResults';
import Loading from '../../components/Loading';
import Hero from '../../components/Hero';
import { fetchMapDetails } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledMapDetails, StyledMapDetailsGrid } from './styled';

class MapDetails extends React.PureComponent {
  static propTypes = {
    MapDetails: PropTypes.object,
    fetchMapDetails: PropTypes.func,
  };

  async update(match) {
    this.props.fetchMapDetails(match.params.name);
  }

  componentDidMount() {
    if (this.props.match) {
      const { match } = this.props;
      this.update(match);
    }
  }

  render() {
    const MapDetails = this.props.data;
    if (!MapDetails || !MapDetails.data) {
      return <Loading />;
    } else {
      const mapDetailsData = MapDetails.data ? MapDetails.data : [];

      if (mapDetailsData.length === 0) {
        return <EmptyResults />;
      }

      return (
        <Fragment>
          <Hero />
          <StyledMapDetails>
            <StyledMapDetailsGrid>
              {mapDetailsData.map((mapItem, index) => (
                <MapDetail key={index} {...mapItem} />
              ))}
            </StyledMapDetailsGrid>
          </StyledMapDetails>
        </Fragment>
      );
    }
  }
}

export default connect(
  ({ fetchMapDetails: data }) => ({
    data,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchMapDetails,
      },
      dispatch,
    ),
)(MapDetails);
