const React = require('react');
const createReactClass = require('create-react-class');
import {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { fonts, colors } from '../constants';


const WINDOW_WIDTH = Dimensions.get('window').width;

const ScrollableTabBar = createReactClass({
 
  getInitialState() {
    this._tabsMeasurements = [];
    return {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: null,
    };
  },

  componentDidMount() {
    this.props.scrollValue.addListener(this.updateView);
  },

  updateView(offset) {
    const position = Math.floor(offset.value);
    const pageOffset = offset.value % 1;
    const tabCount = this.props.tabs.length;
    const lastTabPosition = tabCount - 1;

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return;
    }

    if (this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
    }
  },

  necessarilyMeasurementsCompleted(position, isLastTab) {
    return this._tabsMeasurements[position] &&
      (isLastTab || this._tabsMeasurements[position + 1]) &&
      this._tabContainerMeasurements &&
      this._containerMeasurements;
  },

  updateTabPanel(position, pageOffset) {
    const containerWidth = this._containerMeasurements.width;
    const tabWidth = this._tabsMeasurements[position].width;
    const nextTabMeasurements = this._tabsMeasurements[position + 1];
    const nextTabWidth = nextTabMeasurements && nextTabMeasurements.width || 0;
    const tabOffset = this._tabsMeasurements[position].left;
    const absolutePageOffset = pageOffset * tabWidth;
    let newScrollX = tabOffset + absolutePageOffset;

    // center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
    newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
    newScrollX = newScrollX >= 0 ? newScrollX : 0;

    if (Platform.OS === 'android') {
      this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false, });
    } else {
      const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width);
      newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
      this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false, });
    }

  },

  updateTabUnderline(position, pageOffset, tabCount) {
    const lineLeft = this._tabsMeasurements[position].left;
    const lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      const nextTabLeft = this._tabsMeasurements[position + 1].left;
      const nextTabRight = this._tabsMeasurements[position + 1].right;

      const newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
      const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight);

      this.state._leftTabUnderline.setValue(newLineLeft);
      this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
    } else {
      this.state._leftTabUnderline.setValue(lineLeft);
      this.state._widthTabUnderline.setValue(lineRight - lineLeft);
    }
  },

  renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    
    const iconName = 
    name === 'TOP' ? 'ios-trending-up' :
    name === 'Tecnologia' ? 'ios-radio' : 
    name === 'Ciência' ? 'ios-flask' :
    name === 'Desporto' ? 'ios-football' :
    name === 'Entretenimento' ? 'md-film' : '';
    const activeTabStyle = isTabActive ? styles.activeTabText : styles.inactiveTabText;

    return (
        <TouchableOpacity 
          key={`${name}_${page}`}
          accessible={true}
          accessibilityLabel={name}
          accessibilityTraits='button'
          onPress={() => onPressHandler(page)}
          onLayout={onLayoutHandler}
          style={styles.tab}>
            <Ionicons name={iconName} style={activeTabStyle} />
            <Text style={activeTabStyle}> {name} </Text>
        </TouchableOpacity>
    )
  },

  measureTab(page, event) {
    const { x, width, height, } = event.nativeEvent.layout;
    this._tabsMeasurements[page] = {left: x, right: x + width, width, height, };
    this.updateView({value: this.props.scrollValue.__getValue(), });
  },

  render() {
    
    const { onScroll } = this.props;

    return <View onLayout={this.onContainerLayout}>
      <ScrollView
        ref={(scrollView) => { this._scrollView = scrollView; }}
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        bounces={false}
        scrollsToTop={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        <View
          style={[styles.tabs, {width: this.state._containerWidth, }, this.props.tabsContainerStyle, ]}
          ref={'tabContainer'}
          onLayout={this.onTabContainerLayout}
        >
          {this.props.tabs.map((name, page) => {
            const isTabActive = this.props.activeTab === page;
            const renderTab = this.props.renderTab || this.renderTab;
            return renderTab(name, page, isTabActive, this.props.goToPage, this.measureTab.bind(this, page));
          })}
        </View>
      </ScrollView>
    </View>;
  },

  componentDidUpdate(prevProps) {
    // If the tabs change, force the width of the tabs container to be recalculated
    if (JSON.stringify(prevProps.tabs) !== JSON.stringify(this.props.tabs) && this.state._containerWidth) {
      this.setState({ _containerWidth: null, });
    }
  },

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    let width = this._tabContainerMeasurements.width;
    if (width < WINDOW_WIDTH) width = WINDOW_WIDTH;
    this.setState({ _containerWidth: width, });
    this.updateView({value: this.props.scrollValue.__getValue(), });
  },

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
    this.updateView({value: this.props.scrollValue.__getValue(), });
  },
});

module.exports = ScrollableTabBar;

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: 'gold'
  },
  tabs: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    
},
activeTabText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.primaryDark,
},
inactiveTabText: {
    fontSize: 17,
    color: colors.grayDark,
}
});
