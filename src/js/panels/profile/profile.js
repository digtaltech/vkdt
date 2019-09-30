import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader, Cell, List, HeaderButton, PanelHeaderContent, HeaderContext,platform, IOS, View, Avatar, Footer,Gallery,UsersStack,InfoRow, Counter} from "@vkontakte/vkui"

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

class Profile extends React.Component {

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

        return (
          <View activePanel="info-row">
    <Panel id="info-row">
      <PanelHeader>
        Профиль
      </PanelHeader>

      <Group title="Информация о пользователе">
        <List>

        <Cell
          photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"

          before={<Avatar src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" size={80}
          />}
          size="l"
        >
          <div class="text_profile">Артур Стамбульцян </div>
          <div class="text_profile1">Волонтёр</div>
        </Cell>

          <Cell>
          <InfoRow title="Дата рождения">
            30 января 1993
          </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Город">
              Сочи
            </InfoRow>
          </Cell>
        </List>

      </Group>
      <Group title="Волонтёрство">
        <List>
          <Cell
            before={<Avatar style={{ background: 'var(--accent)' }} size={28}><Icon24Favorite fill="var(--white)" /></Avatar>}
            description="Видно всем"
          >
            24 место в топе
          </Cell>
          <Cell
            before={<Avatar style={{ background: 'var(--destructive)' }} size={28}><Icon16Like fill="var(--white)" /></Avatar>}
            description="Все мероприятия"
          >
            Мои мероприятия
          </Cell>
        </List>
      </Group>
      <Group title="Состоит" >
        <List>
          <Cell before={<Avatar src="http://ipic.su/img/img7/fs/1.1569624033.png" />}>ВОД «Волонтеры Победы»</Cell>
          <Cell before={<Avatar src="http://ipic.su/img/img7/fs/2.1569624064.jpg" />}>Добровольческое объединение «Оберег»</Cell>
          <Cell before={<Avatar src="http://ipic.su/img/img7/fs/3.1569624098.jpg" />}>ЭРОДДиМ «Ребячья республика»</Cell>
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

export default connect(null, mapDispatchToProps)(Profile);
