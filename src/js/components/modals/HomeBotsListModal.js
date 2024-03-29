import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {
    List,
    Cell,
    Avatar,
    ModalPage,
    ModalPageHeader,
    HeaderButton,
    IS_PLATFORM_IOS,
    FixedLayout
} from "@vkontakte/vkui";

import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';

//import connect from '@vkontakte/vk-connect';

const bots = [
    {
        name: 'VKS',
        avatar: 'https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg',
        desc: 'Нет, меня не роняли в детстве',
        unoiterator: 'hui'
    },
    {
        name: 'Недобот',
        avatar: 'https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg',
        desc: 'Я ни разу не пил кокосовое молоко',
        unoiterator: 'pizda'
    },
    {
        name: 'Callback API Бот',
        avatar: 'https://pp.userapi.com/c846523/v846523036/1e69b7/UxWZ1yAqY7I.jpg',
        desc: 'Даже не спрашивай',
        unoiterator: 'pizda'
    },
];

class HomeBotsListModal extends React.Component {
    //Json;
    constructor(props) {
        super(props);

        this.state = {
            activeTab: props.activeTab["MODAL_PAGE_BOT_INFO"] || "modal"
        };
    }

    render() {
        const {id, onClose, openModal} = this.props;
        //this.Json = JSON.parse('{"Number": "2,1","Text": "sasai"}');

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

                        /appbots на минималках
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={80}
            >
                <FixedLayout vertical="top">
                <List>
                    {bots.map((bot, index) => (
                        <Cell
                            key={index}
                            description={bot.desc}
                            before={<Avatar size={40} src={bot.avatar}/>}
                            onClick={() => openModal('MODAL_PAGE_BOT_INFO')}
                            asideContent={<Icon24Chevron fill="#528bcc"/>}
                        >
                            {bot.name}
                        </Cell>
                    ))}
                </List>
                </FixedLayout>
            </ModalPage>
        );
    }

}

const mapDispatchToProps = {
    openModal
};

export default connect(null, mapDispatchToProps)(HomeBotsListModal);