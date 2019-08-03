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
    mapDetails: PropTypes.object,
    fetchmapDetails: PropTypes.func,
  };

  async update(match) {
    this.props.fetchMapDetails(match.params.id);
  }

  componentDidMount() {
    if (this.props.match) {
      const { match } = this.props;
      this.update(match);
    }
  }

  render() {
    const mapDetailsData = this.props.data;
    if (!mapDetailsData || !mapDetailsData.data) {
      return <Loading />;
    } else {
      if (mapDetailsData.data && mapDetailsData.data.length === 0) {
        return <EmptyResults />;
      }
      const mapDetail = mapDetailsData.data[0];
      return (
        <Fragment>
          <Hero />
          <StyledMapDetails>
            <StyledMapDetailsGrid>
              <MapDetail key={mapDetail.id} {...mapDetail} />
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
