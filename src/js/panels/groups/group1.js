import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader, Cell, List, HeaderButton, PanelHeaderContent, HeaderContext,platform, IOS, View, Avatar, Footer,Gallery,UsersStack,InfoRow, Counter, Header, HorizontalScroll,} from "@vkontakte/vkui"

import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon16ReplyOutline from '@vkontakte/icons/dist/16/reply_outline';
import Icon16CheckCircle from '@vkontakte/icons/dist/16/check_circle';


import Map from './Map.js';
import ThemeSelector from './ThemeSelector.js';

class HomePanelBase extends React.Component {

    state = {
        showImg: false,
        contextOpened: true,
        mode: 'all'
    };



    constructor(props) {
        super(props);

        this.osName = platform();
    this.state = {
      contextOpened: false,
      theme: 'normal.day',
      //activePanel: 'brand'
    }
    this.onChange = this.onChange.bind(this);
    this.toggleContext = this.toggleContext.bind(this);
    this.select = this.select.bind(this);
  }

  toggleContext () {
    this.setState({ contextOpened: !this.state.contextOpened });
  }

  select (e) {
    const mode = e.currentTarget.dataset.mode;
    this.setState({ mode });
    requestAnimationFrame(this.toggleContext);
  }


    showImg = () => {
        this.setState({showImg: true});
    };


    onChange(evt) {
        evt.preventDefault();

        var change = evt.target.id;
        console.log('selected ' + change);
        this.setState({
            "theme": change,
        });
    }


    render() {
        const {id, setPage, withoutEpic} = this.props;
        const itemStyle = {
          flexShrink: 0,
          width: 80,
          height: 94,
          display: 'flex',
          flexDirection:
          'column',
          alignItems: 'center',
          fontSize: 12
        };
        return (

          <View activePanel="info-row">
    <Panel id="info-row">
      <PanelHeader>
        Мероприятие
      </PanelHeader>

      <Group >
      <List class="event1">
      <div style={{
          backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
          height: 200,

          justifyContent: 'center',
          paddingBottom: '6px',
          borderRadius: 12
        }}>
        <div class="text_event">Оказание помощи</div>
        <div class="text_event1">в социальной сфере пожилым гражданам, лицам с инвалидностью</div>
      </div>



        <Header level="secondary">Организатор</Header>
        <Cell
          photo="http://ipic.su/img/img7/fs/1.1569624033.png"

          before={<Avatar src="http://ipic.su/img/img7/fs/1.1569624033.png" size={80}
          />}
          size="l"
        >
          <InfoRow>
            <div class="text_profile">ВОД «Волонтеры Победы»</div>
            <div class="text_profile1">Помогаем ветеранам</div>
          </InfoRow>
          </Cell>
          <Button level="commerce" style={{ marginBottom: 8 }} size="xl" before={<Icon16CheckCircle/>} >Принять участие</Button>
          <Button class="baton" size="xl" before={<Icon16ReplyOutline/>} >Поделиться </Button>
        </List>

      </Group>
      <Group style={{ paddingBottom: 8 }}>
        <Header level="secondary">Участники</Header>
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Элджей
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Ольга
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Сергей
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Илья
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Алексей
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Костя
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Миша
            </div>
            <div style={{ ...itemStyle, paddingRight: 4 }}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Вадим
            </div>
          </div>
        </HorizontalScroll>
      </Group>
      <Group title="Карта">
      <div className="App">
              <Map
                  app_id="YF4JrJeITtVSP45UDv6a"
                  app_code="GokM8qzR24EQHzDosOpkOg"
                  lat="55.823438"
                  lng="49.082437  "
                  zoom="17"
                  theme={ this.state.theme }
              />
          </div>
      </Group>

    </Panel>
  </View>

        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
