import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MapCard from '../../components/MapCard/';
import EmptyResults from '../../components/EmptyResults';
import Loading from '../../components/Loading';
import Hero from '../../components/Hero';
import { fetchMaps } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledMainContainer, StyledMainContainerGrid } from './styled';
import { sortData } from '../../utils/helpers';

class MainContainer extends React.PureComponent {
  static propTypes = {
    MapData: PropTypes.object,
    fetchMapData: PropTypes.func,
  };

  async update(match) {
    this.props.fetchMaps(match.params.name);
  }

  componentDidMount() {
    if (this.props.match) {
      const { match } = this.props;
      this.update(match);
    }
  }

  render() {
    const MapData = this.props.data;
    if (!MapData || !MapData.data) {
      return <Loading />;
    } else {
      const queryString = this.props.location.search.replace('?', '');
      const mapDetailsData = MapData.data
        ? sortData(MapData.data, queryString)
        : [];

      if (mapDetailsData.length === 0) {
        return <EmptyResults />;
      }

      return (
        <Fragment>
          <Hero />
          <StyledMainContainer>
            <StyledMainContainerGrid>
              {mapDetailsData.map((mapItem, index) => (
                <MapCard key={index} {...mapItem} />
              ))}
            </StyledMainContainerGrid>
          </StyledMainContainer>
        </Fragment>
      );
    }
  }
}

export default connect(
  ({ fetchMaps: data }) => ({
    data,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchMaps,
      },
      dispatch,
    ),
)(MainContainer);
