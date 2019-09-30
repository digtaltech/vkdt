import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, setPage} from '../../store/router/actions';

import {
    Div,
    Panel,
    Alert,
    Group,
    Button,
    PanelHeader,
    Cell,
    List,
    HeaderButton,
    PanelHeaderContent,
    HeaderContext,
    platform,
    IOS,
    Avatar,
    ModalRoot,
    ModalPage,
    ModalPageHeader,
    Radio,
    IS_PLATFORM_ANDROID,
    IS_PLATFORM_IOS,
    InfoRow,
    ModalCard,
    UsersStack,
    View
} from "@vkontakte/vkui"

import HomeBotInfoModal from "./HomeBotInfoModal";

import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon24Chevron from  '@vkontakte/icons/dist/24/chevron';
import infoBot from './HomeBotInfoModal';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon56MoneyTransferOutline from '@vkontakte/icons/dist/56/money_transfer_outline';
import Icon56NotificationOutline from '@vkontakte/icons/dist/56/notification_outline';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import SelectMimicry from "@vkontakte/vkui/dist/components/SelectMimicry/SelectMimicry";
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import Table from "@material-ui/core/Table";
import TableRow, {TableRowProps} from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";

//import TableHeader from '@material-ui/lib/table/table-header';

const bots = [
    {
        name: 'ВОД «Волонтеры Победы»',
        avatar: 'http://ipic.su/img/img7/fs/1.1569624033.png',
        desc: 'Помогаем одиноким ветеранам, помощь детям',
        unoiterator: 'pizda'
    },
    {
        name: 'Добровольческое объединение «Оберег»',
        avatar: 'http://ipic.su/img/img7/fs/2.1569624064.jpg',
        desc: 'Добровольческое движение',
        unoiterator: 'pidzda'
    },
    {
        name: 'ЭРОДДиМ «Ребячья республика»',
        avatar: 'http://ipic.su/img/img7/fs/3.1569624098.jpg',
        desc: 'Работа с той категорией людей, которую принято называть социально незащищёнными.',
        unoiterator: 'hui'
    },
    {
    name: 'Добровольческое движение «От сердца к сердцу»',
    avatar: 'http://ipic.su/img/img7/fs/4.1569624112.jpg',
    desc: 'Защита флоры; Защита фауны; Экология мегаполиса',
    unoiterator: 'pizda'

},
{
    name: 'Волонтерское объединение «Ветер перемен»',
        avatar: 'http://ipic.su/img/img7/fs/5.1569624131.jpg',
    desc: 'Требуются волонтёры на день города',
    unoiterator: 'hui'
},
{
    name: 'Общество волонтеров «В кругу друзей»',
        avatar: 'http://ipic.su/img/img7/fs/6.1569624145.jpg',
    desc: 'Нуждаемся в волонтёрах, которые отлично разбираются в городе Казань',
    unoiterator: 'hui'
},
{
    name: 'Молодежное объединение «Прометей»',
        avatar: 'http://ipic.su/img/img7/fs/7.1569624158.jpg',
    desc: 'Универсиада в Казани',
    unoiterator: 'pizda'
},
{
    name: 'Молодежное объединение «Здоровое поколение»',
        avatar: 'http://ipic.su/img/img7/fs/8.1569624168.png',
    desc: 'Помощь иннвалидам',
    unoiterator: 'pizda'
},
{
    name: 'Волонтерский отряд «Добрая воля»',
        avatar: 'http://ipic.su/img/img7/fs/9.1569624177.png',
    desc: 'Требуются волонтёры с углублённым знанием английского языка',
    unoiterator: 'pizda'
},
{
    name: 'Сектор по молодежной политике',
        avatar: 'http://ipic.su/img/img7/fs/10.1569624187.jpg',
    desc: 'Проведём чистку озера',
    unoiterator: 'pizda'
},
];

const MODAL_PAGE_FILTERS = 'filters';
const MODAL_PAGE_COUNTRIES = 'countries';
const MODAL_PAGE_STORY_FEEDBACK = 'story-feedback';
const MODAL_PAGE_USER_INFO = 'user-info';

const MODAL_CARD_MONEY_SEND = 'money-send';
const MODAL_CARD_APP_TO_MENU = 'app-to-menu';
const MODAL_CARD_ABOUT = 'say-about';
const MODAL_CARD_NOTIFICATIONS = 'notifications';
const MODAL_CARD_CHAT_INVITE = 'chat-invite';
const PIZDEC_NAHUI_BLYAT = 'initeGroup';

const countryList = require('country-list');
//const random_useragent = require('random-useragent');

//import Table  from 'material-ui/lib/table/table';
//import TableBody from 'material-ui/lib/table/table-body';
//import TableRow from 'material-ui/lib/table/table-row';

class HomePanelBase extends React.Component implements TableRowProps{
    random_useragent;
    idCurrent;
    constructor(props) {
        super(props);

        this.state = {
            activeModal: null,
            modalHistory: []
        };

         this.users = 'k'.repeat(100).split('').map(() => {
             return this.getRandomUser();
         });

        this.modalBack = () => {
            this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
        };
    }

    //Table = require('material-ui/lib/table/table');
    //TableBody = require('material-ui/lib/table/table-body');
    //TableHeader = require('material-ui/lib/table/table-header');
    //TableHeaderColumn = require('material-ui/lib/table/table-header-column');
    //TableRow = require('material-ui/lib/table/table-row');
    //TableRowColumn = require('material-ui/lib/table/table-row-column');
    //TableExample;

    getRandomUser(){
        this.random_useragent = require('random-useragent');
        this.random_useragent.getRandom();
    }

    setActiveModal(activeModal) {
        activeModal = activeModal || null;
        let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

        if (activeModal === null) {
            modalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
            modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
        } else {
            modalHistory.push(activeModal);
        }

        this.setState({
            activeModal,
            modalHistory
        });
    };

    initGroup(id){
        console.log(id);
        this.idCurrent=id;
        console.log(this.botx);
        this.setActiveModal(PIZDEC_NAHUI_BLYAT)
    }

    render() {
        const modal = (
            
            <ModalRoot activeModal={this.state.activeModal}>
                <ModalPage
                    id={MODAL_PAGE_FILTERS}
                    onClose={this.modalBack}
                    header={
                        <ModalPageHeader
                            left={IS_PLATFORM_ANDROID &&
                            <HeaderButton onClick={this.modalBack}><Icon24Cancel/></HeaderButton>}
                            right={<HeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? 'Готово' :
                                <Icon24Done/>}</HeaderButton>}
                        >
                            Фильтры
                        </ModalPageHeader>
                    }
                >
                    <FormLayout>
                        <FormLayoutGroup>
                            <Button level="secondary" onClick={() => this.setActiveModal(MODAL_PAGE_COUNTRIES)}
                                    size="xl">Выбор страны</Button>
                            <Button level="secondary" onClick={() => this.setActiveModal(MODAL_PAGE_STORY_FEEDBACK)}
                                    size="xl">Просмотры истории</Button>
                            <Button level="secondary" onClick={() => this.setActiveModal(MODAL_PAGE_USER_INFO)}
                                    size="xl">Информация о пользователе</Button>
                        </FormLayoutGroup>

                        <SelectMimicry top="Страна" placeholder="Выбрать страну"
                                       onClick={() => this.setActiveModal(MODAL_PAGE_COUNTRIES)}/>
                        <SelectMimicry top="Город" placeholder="Выбрать город" disabled/>

                        <FormLayoutGroup top="Пол">
                            <Radio name="sex" value={0} defaultChecked>Любой</Radio>
                            <Radio name="sex" value={1}>Мужской</Radio>
                            <Radio name="sex" value={2}>Женский</Radio>
                        </FormLayoutGroup>

                        <SelectMimicry top="Школа" placeholder="Выбрать школу" disabled/>
                        <SelectMimicry top="Университет" placeholder="Выбрать университет" disabled/>

                        <FormLayoutGroup top="Дополнительно">
                            <Checkbox>С фотографией</Checkbox>
                            <Checkbox>Сейчас на сайте</Checkbox>
                        </FormLayoutGroup>

                        <FormLayoutGroup top="Работа">
                            <Input placeholder="Место работы"/>
                            <Input placeholder="Должность"/>
                        </FormLayoutGroup>

                        <FormLayoutGroup top="Дата рождения">
                            <SelectMimicry placeholder="День рождения" disabled/>
                            <SelectMimicry placeholder="Месяц рождения" disabled/>
                            <SelectMimicry placeholder="Год рождения" disabled/>
                        </FormLayoutGroup>
                    </FormLayout>
                </ModalPage>

                <ModalPage
                    id={MODAL_PAGE_COUNTRIES}
                    header={
                        <ModalPageHeader
                            left={IS_PLATFORM_ANDROID &&
                            <HeaderButton onClick={this.modalBack}><Icon24Cancel/></HeaderButton>}
                            right={IS_PLATFORM_IOS &&
                            <HeaderButton onClick={this.modalBack}><Icon24Dismiss/></HeaderButton>}
                        >
                            Выберите страну
                        </ModalPageHeader>
                    }
                    onClose={this.modalBack}
                    settlingHeight={80}
                >
                    <FormLayout>
                        <Button level="secondary" onClick={() => this.setActiveModal(MODAL_PAGE_USER_INFO)} size="xl">Информация
                            о пользователе</Button>

                        <FormLayoutGroup>
                            {countryList.getCodeList((code) => {
                                return (
                                    <Radio key={code} name="country" value={code}>{countryList.getName(code)}</Radio>
                                );
                            })}
                        </FormLayoutGroup>
                    </FormLayout>
                </ModalPage>

                <HomeBotInfoModal
                    id={PIZDEC_NAHUI_BLYAT}
                    onClose={this.modalBack}
                    botxx={bots}
                    indexActiv={this.idCurrent}
                >

                </HomeBotInfoModal>

                <ModalPage
                    id={MODAL_PAGE_STORY_FEEDBACK}
                    header={
                        <ModalPageHeader
                            left={IS_PLATFORM_ANDROID &&
                            <HeaderButton onClick={this.modalBack}><Icon24Cancel/></HeaderButton>}
                            right={IS_PLATFORM_IOS &&
                            <HeaderButton onClick={this.modalBack}><Icon24Dismiss/></HeaderButton>}
                        >
                            Просмотры истории
                        </ModalPageHeader>
                    }
                    onClose={this.modalBack}
                    settlingHeight={80}
                >
                    <List>
                        {this.users.map((user) => {
                            return (
                                <Cell
                                    before={<Avatar size={40} src='http://ipic.su/img/img7/fs/6.1569624145.jpg'/>}
                                    key='hui'
                                >pidar gryazniy</Cell>
                            );
                        })}
                    </List>
                </ModalPage>

                <ModalPage
                    id={MODAL_PAGE_USER_INFO}
                    header={
                        <ModalPageHeader
                            left={IS_PLATFORM_ANDROID &&
                            <HeaderButton onClick={this.modalBack}><Icon24Cancel/></HeaderButton>}
                            right={IS_PLATFORM_IOS &&
                            <HeaderButton onClick={this.modalBack}><Icon24Dismiss/></HeaderButton>}
                        >
                            Информация о пользователе
                        </ModalPageHeader>
                    }
                    onClose={this.modalBack}
                >
                    <List>
                        <Cell>
                            <InfoRow title="Дата рождения">
                                30 января 1993
                            </InfoRow>
                        </Cell>
                        <Cell>
                            <InfoRow title="Родной город">
                                Ереван
                            </InfoRow>
                        </Cell>
                        <Cell>
                            <InfoRow title="Место работы">
                                Команда ВКонтакте
                            </InfoRow>
                        </Cell>
                    </List>
                </ModalPage>

                <ModalCard
                    id={MODAL_CARD_MONEY_SEND}
                    onClose={() => this.setActiveModal(null)}
                    icon={<Icon56MoneyTransferOutline/>}
                    title="Отправляйте деньги друзьям, используя банковскую карту"
                    caption="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
                    actions={[{
                        title: 'Попробовать',
                        type: 'primary',
                        action: () => {
                            this.setActiveModal(MODAL_CARD_APP_TO_MENU);
                        }
                    }]}
                >

                </ModalCard>

                <ModalCard
                    id={MODAL_CARD_APP_TO_MENU}
                    onClose={() => this.setActiveModal(null)}
                    icon={<Avatar type="app" src="https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg"
                                  size={72}/>}
                    title="Добавить игру «Загадки детства» в меню?"
                    caption="Игра появится под списком разделов на экране меню и будет всегда под рукой."
                    actions={[{
                        title: 'Добавить в меню',
                        type: 'primary',
                        action: () => {
                            this.setActiveModal(MODAL_CARD_ABOUT);
                        }
                    }
                    ]}
                />

                <ModalCard
                    id={MODAL_CARD_ABOUT}
                    onClose={() => this.setActiveModal(null)}
                    title="Расскажите о себе"
                    actions={[
                        {
                            title: 'Сохранить',
                            type: 'primary',
                            action: () => {
                                this.setActiveModal(MODAL_CARD_NOTIFICATIONS);
                            }
                        }
                    ]}
                >
                    <Textarea defaultValue={'В Грузии'}/>
                </ModalCard>

                <ModalCard
                    id={MODAL_CARD_NOTIFICATIONS}
                    onClose={() => this.setActiveModal(null)}
                    icon={<Icon56NotificationOutline/>}
                    title="Приложение запрашивает разрешение на отправку Вам уведомлений"
                    actions={[{
                        title: 'Запретить',
                        type: 'secondary',
                        action: () => this.setActiveModal(MODAL_CARD_CHAT_INVITE)
                    }, {
                        title: 'Разрешить',
                        type: 'primary',
                        action: () => this.setActiveModal(MODAL_CARD_CHAT_INVITE)
                    }]}
                />

                <ModalCard
                    id={MODAL_CARD_CHAT_INVITE}
                    onClose={() => this.setActiveModal(null)}
                    icon={<Avatar src="https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg" size={72}/>}
                    title="Баскетбол на выходных"
                    caption="Приглашение в беседу"
                    actions={[{
                        title: 'Присоединиться',
                        type: 'primary',
                        action: () => this.setActiveModal(null)
                    }, {
                        title: 'Скопировать приглашение',
                        type: 'secondary',
                        action: () => this.setActiveModal(null)
                    }]}
                    actionsLayout="vertical"
                >
                    <UsersStack
                        photos={[
                            'https://sun9-9.userapi.com/c847219/v847219582/1eac9d/jxtvce2MwZk.jpg?ava=1',
                            'https://pp.userapi.com/c834200/v834200315/1039ea/iFd9WUOdmDo.jpg?ava=1',
                            'https://sun9-20.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1',
                            'https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1',
                            'https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1',
                            'https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1'
                        ]}
                        size="m"
                        count={3}
                        vertical
                    >Алексей, Илья, Михаил<br/>и ещё 3 человека</UsersStack>
                </ModalCard>
            </ModalRoot>
        );
        let TableExample = React.Component({
            cellClicked: function(rowNumber, columnId) {
               console.log('cell clicked!');
               openModal('MODAL_PAGE_BOT_INFO');
           },});

        function handleClick(id) {
            console.log(id)
        }

        function handleCellClick(row,column,event)
        {
            //if(row ==0)
                console.log(row);
            console.log(row.toLocaleString());
            console.log(row.event);
        }
        function onRowClick(e, row) {

        }

        return (
            <View activePanel="modals" modal={modal}>
                <Panel id="modals">
                    <PanelHeader>Модальные окна</PanelHeader>
                    <List>
                        {bots.map((bot, index) => (
                            <Cell
                                key={index}
                                description={bot.desc}
                                before={<Avatar size={40} src={bot.avatar}/>}
                                onClick={() =>
                                    this.initGroup(index)
                                }
                                asideContent={<Icon24Chevron fill="#528bcc"/>}
                            >
                                {bot.name}
                            </Cell>
                        ))}
                    </List>
                </Panel>
            </View>
        );
    }
}
const mapDispatchToProps = {
    setPage,
    goBack,
    closePopout,
    openModal
};



export default connect(null, mapDispatchToProps)(HomePanelBase);