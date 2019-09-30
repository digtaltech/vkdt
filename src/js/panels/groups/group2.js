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

class Group2 extends React.Component {

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
      //activePanel: 'brand'
    };
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
        Группа
      </PanelHeader>

      <Group >
        <List>

        <Cell
          photo="http://ipic.su/img/img7/fs/1.1569624033.png"

          before={<Avatar src="http://ipic.su/img/img7/fs/1.1569624033.png" size={80}
          />}
          size="l"
        >
          <div class="text_profile">ВОД «Волонтеры Победы»</div>
          <div class="text_profile1">Волонтёрская организация</div>
        </Cell>

          <Cell>
          <InfoRow title="О нас">
            Помогаем одиноким ветеранам, помощь детям
          </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Город">
              Сочи
            </InfoRow>
          </Cell>
          <Button size="xl" before={<Icon16ReplyOutline/>} >Поделиться</Button>
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
      <Group title="Мероприятия">
      <List>
      <Div>
      <div class="text1" style={{
        backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
        height: 200,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: '6px',
        borderRadius: 12
      }}>
      Мероприятие
      </div>
    </Div>
    <Div>
    <div class="text1" style={{
      backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
      height: 200,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: '6px',
      borderRadius: 12
    }}>
    Мероприятие
    </div>
  </Div>
  <Div>
  <div class="text1" style={{
    backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
    height: 200,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: '6px',
    borderRadius: 12
  }}>
  Мероприятие
  </div>
</Div>
        <Button size="xl" >Показать ещё...</Button>
      </List>
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

export default connect(null, mapDispatchToProps)(Group2);
