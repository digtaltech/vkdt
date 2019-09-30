import React from 'react';
import {connect} from 'react-redux';

import {
    Cell,
    List,
    Avatar,
    InfoRow,
    ModalPage,
    ModalPageHeader,
    HeaderButton,
    IS_PLATFORM_IOS,
    Group,
    HorizontalScroll,
    Header,
    Panel,
    PanelHeader,
    View,
    Button
} from "@vkontakte/vkui";

import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon16ReplyOutline from '@vkontakte/icons/dist/16/reply_outline';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import {closePopout, goBack, openModal, openPopout, setPage} from "../../store/router/actions";

import Div from "@vkontakte/vkui/dist/components/Div/Div";


class HomeBotsListModal extends React.Component {
    botOne;
    render() {
        const {id, onClose} = this.props;
        this.props.botxx.map((bot, indexx) => (
            indexx==this.props.indexActiv?this.botOne = bot:this.botOne=this.botOne
        ))
        //this.botOne=this.props.botxx.get(this.props.indexActiv);
        console.log(this.botOne);
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

            <ModalPage
                id={id}
                header={
                    <ModalPageHeader
                        left={!IS_PLATFORM_IOS &&
                        <HeaderButton onClick={onClose}><Icon24Cancel/></HeaderButton>}
                        right={IS_PLATFORM_IOS &&
                        <HeaderButton onClick={onClose}><Icon24Dismiss/></HeaderButton>}
                    >
                        Группа
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={80}
            >

                <View activePanel="info-row">
                    <PanelHeader>
                        Группа
                    </PanelHeader>
                    <Panel id="info-row">
                        <Group >
                            <List>

                                <Cell
                                    photo="http://ipic.su/img/img7/fs/1.1569624033.png"

                                    before={<Avatar src={this.botOne.avatar} size={80}
                                    />}
                                    size="l"
                                >
                                    <div class="text_profile">{this.botOne.name}</div>
                                    <div class="text_profile1">Волонтёрская организация</div>
                                </Cell>

                                <Cell>
                                    <InfoRow title="О нас">
                                        {this.botOne.desc}
                                    </InfoRow>
                                </Cell>
                                <Cell>
                                    <InfoRow title="Город">
                                        Сочи
                                    </InfoRow>
                                </Cell>
                                <Button size="xl" level="secondary" before={<Icon16ReplyOutline/>} >Поделиться</Button>
                                <Button size="xl" >Вступить</Button>

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
            </ModalPage>
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

export default connect(mapStateToProps =>({
    pizdec: mapStateToProps
}),mapDispatchToProps)(HomeBotsListModal);