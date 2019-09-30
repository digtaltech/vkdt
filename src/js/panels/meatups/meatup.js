import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage, setStory} from '../../store/router/actions';

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
    View,
    Avatar,
    Footer,
    Gallery,
    UsersStack,
    Root
} from "@vkontakte/vkui"

import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Group1 from '../groups/group1';
const PIZDEC_CUKA_BLYAT = 'initMet';
class Meatup extends React.Component {

    state = {
        showImg: false,
        contextOpened: true,
        mode: 'all',
        activeView: 'gallery'
    };


    constructor(props) {
        super(props);

        //this.osName = platform();
    this.state = {
      contextOpened: false,
      activePanel: 'brand'
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

    initClickMet() {
        openPopout(PIZDEC_CUKA_BLYAT);
        console.log("хуй")
    }



    render() {
        const {id, setPage, withoutEpic, openPopout} = this.props;
                return (
            <Root activeView={this.state.activeView}>
            <View activePanel={"hui"}
        id={PIZDEC_CUKA_BLYAT}
            >
            <Group1 id={'hui'}>

            </Group1>
    </View>
          <View activePanel="gallery"
          >
                   <Panel id="gallery">
                   <PanelHeader>
                     Профиль
                   </PanelHeader>
                       <Group title="Текущие">

                           <Gallery
                               align="center"
                               style={{ height: 250}}>
                               <div>
                                   <div onClick={()=> this.setState({activeView: PIZDEC_CUKA_BLYAT})} style={{
                                       backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
                                       height: 200,

                                       justifyContent: 'center',
                                       paddingBottom: '6px',
                                       borderRadius: 12
                                   }}>
                                       <div className={"text_event"}>Оказание помощи</div>
                                       <div className={"text_event1"}>в социальной сфере пожилым гражданам, лицам с инвалидностью</div>
                                       <div className={"peop"}>
                                           <UsersStack
                                               photos={[
                                                   'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                                                   'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
                                                   'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
                                               ]}
                                               style={{ color: "#fff" }}
                                           >Приняли участие 2 176 человек</UsersStack>
                                       </div>
                                   </div>
                                   <div className={"text_event3"}>Организатор: ВОД «Волонтеры Победы»</div>
                               </div>

                               <div>
                                   <div onClick={()=>
                                       this.initClickMet()} style={{
                                       backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
                                       height: 200,

                                       justifyContent: 'center',
                                       paddingBottom: '6px',
                                       borderRadius: 12
                                   }}>
                                       <div className={"text_event"}>Добровольческое движение</div>
                                       <div className={"text_event1"}>Проект направлен на пропаганду здорового образа жизни</div>
                                       <div className={"peop"}>
                                           <UsersStack
                                               photos={[
                                                   'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                                                   'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
                                                   'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
                                               ]}
                                               style={{ color: "#fff" }}
                                           >Приняли участие 133 человека</UsersStack>
                                       </div>
                                   </div>
                                   <div className={"text_event3"}>Добровольческое объединение «Оберег</div>
                                 </div>
                                 <div>
                                 <div onClick={()=>
                                     this.initClickMet()} style={{
                                     backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
                                     height: 200,
                                     justifyContent: 'center',
                                     paddingBottom: '6px',
                                     borderRadius: 12
                                   }}>
                                   <div className={"text_event"}>Работа с той категорией людей,</div>
                                   <div className={"text_event1"}>которую принято называть социально незащищёнными. Районный социальный марафон «Дорога добра»</div>
                                      <div className={"peop"}>
                                       <UsersStack
                                          photos={[
                                            'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                                            'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
                                            'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
                                          ]}
                                          style={{ color: "#fff" }}
                                                >Приняли участие 238 человек</UsersStack>
                                                </div>
                                      </div>
                                      <div className={"text_event3"}>ЭРОДДиМ «Ребячья республика</div>
                                      </div>

                       </Gallery>

                     </Group>
                     <Group title="Предстоящие">
                     <Gallery
                      align="center"
                      style={{ height: 250 }}>

                          <div>
                          <div onClick={()=>
                              this.initClickMet()} style={{
                              backgroundImage: 'linear-gradient(135deg,  #ff9933 0%, #ffff00 100%)',
                              height: 200,

                              justifyContent: 'center',
                              paddingBottom: '6px',
                              borderRadius: 12
                            }}>
                            <div className={"text_event"}>Добровольческое движение</div>
                            <div className={"text_event1"}>Защита флоры; Защита фауны; Экология мегаполиса. Координатор Движения — Бутрим Наталья Александровна</div>
                               <div className={"peop"}>
                                <UsersStack
                                   photos={[
                                     'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                                     'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
                                     'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
                                   ]}
                                   style={{ color: "#fff" }}
                                         >Приняли участие 12 человек</UsersStack>
                                         </div>
                               </div>
                               <div className={"text_event3"}>«От сердца к сердцу»</div>
                               </div>

                               <div>
                               <div onClick={()=>
                                   this.initClickMet()} style={{
                                   backgroundImage: 'linear-gradient(135deg,  #ff9933 0%, #ffff00 100%)',
                                   height: 200,
                                   justifyContent: 'center',
                                   paddingBottom: '6px',
                                   borderRadius: 12
                               }}>
                                   <div className={"text_event"}>Требуются волонтёры на день города</div>
                                   <div className={"text_event1"}>Оказание помощи в социальной сфере пожилым гражданам, лицам с инвалидностью</div>
                                   <div className={"peop"}>
                                       <UsersStack
                                           photos={[
                                               'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                                               'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
                                               'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
                                           ]}
                                           style={{ color: "#fff" }}
                                       >Приняли участие 176 человек</UsersStack>
                                   </div>
                               </div>
                                   <div className={"text_event3"}>Волонтерское объединение «Ветер перемен»</div>
                               </div>
                         <div>
                             <div onClick={()=>
                                 this.initClickMet()} style={{
                                 backgroundImage: 'linear-gradient(135deg,  #ff9933 0%, #ffff00 100%)',
                                 height: 200,

                                 justifyContent: 'center',
                                 paddingBottom: '6px',
                                 borderRadius: 12
                             }}>
                                 <div className={"text_event"}>Нуждаемся в волонтёрах</div>
                                 <div className={"text_event1"}>которые отлично разбираются в городе Казань</div>
                                 <div className={"peop"}>
                                     <UsersStack
                                         photos={[
                                             'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                                             'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
                                             'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
                                         ]}
                                         style={{ color: "#fff" }}
                                     >Приняли участие 2 человек</UsersStack>
                                 </div>
                             </div>
                             <div className={"text_event3"}>Общество волонтеров «В кругу друзей»</div>
                         </div>

                     </Gallery>
                     </Group>
                     <Group title="Прошедшие">
                     <Gallery
                      align="center"
                      style={{ height: 220 }}>
                     <div onClick={()=>
                         this.initClickMet()} style={{
                          backgroundImage: 'linear-gradient(135deg,#00ff99 0%, #ff99cc  100%)',
                          height: 200,
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                          paddingBottom: '6px',
                          borderRadius: 12,
                        }}/>
                        <div onClick={()=>
                            this.initClickMet()} style={{
                             backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
                             height: 200,
                             display: 'flex',
                             alignItems: 'flex-end',
                             justifyContent: 'center',
                             paddingBottom: '6px',
                             borderRadius: 12

                           }}/>
                           <div onClick={()=>
                               this.initClickMet()} style={{
                                backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
                                height: 200,
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                paddingBottom: '6px',
                                borderRadius: 12
                              }}/>
                     </Gallery>
                     </Group>
                   </Panel>
                 </View>
            </Root>
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

export default connect(null, mapDispatchToProps)(Meatup);
