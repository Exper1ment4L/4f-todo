import React, { useState, Fragment } from 'react';
import Sidebar from 'react-sidebar';

import Icon from '../../utils/icon';

export default { title: 'Sidebar' };

export const ReactSidebar = () => {
    const [open, setOpen] = useState(true);

    const style = {
        sidebar: {
            width: open ? '256px' : '56px',
            overflowX: 'hidden',
            transition: 'width 0.3s ease-out',
            WebkitTransition:'width 0.3s ease-out',
        },
        content: {
            marginLeft:'10px',
            left:"200px",
        },
    };

    const content = (
        <Fragment>
            <div style={{ color: 'blue', fontSize: '30px', visibility: open ? 'visible' : 'hidden', height: '60px', lineHeight: '60px' }}>Todolist</div>
            <div style={{ height: '50px', width: '50px', borderRadius: '50%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)', position: 'absolute', right: 5, top: 5 }}>
                <Icon icon={open ? 'leftarrow' : 'rightarrow'} size={50} color="blue" onClick={() => setOpen(!open)} style={{}} />
            </div>
            <hr />
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button style={{ height: '50px', width: open ? '230px' : '50px', borderRadius: '5px', backgroundColor: '#18A0FB', display: 'inline', position: 'relative', border: 'none'}}>
                    {open ? (
                        <div style={{ alignItems: 'center' }}>
                            <span style={{ position: 'absolute', top: 17, left: 20, fontSize: '16px', color: 'white' }}>Yeni Görev Oluştur</span>
                            <div style={{ width: '100px', height: '30px', borderRight: '0.5px solid rgba(255, 255, 255, 0.3)', position: 'absolute', right: 60, top: 10 }}></div>
                            <Icon icon="plus" size={32} color="#109CF1" style={{ position: 'absolute', right: 15, top: 1, marginTop: '7px' }} />
                        </div>
                    ) : (
                        <Icon icon="plus" size={32} color="#109CF1" />
                    )}
                </button>
            </div>
            <div style={{ marginTop: '10px', marginLeft:'12px'}}>
                <Icon icon="calendar" size={32} color="red" />
                <span style={{ fontSize: '32px', display: open ? 'inline-block' : 'none' }}>Takvim</span>
            </div>
            <div style={{ marginTop: '10px', marginLeft:'12px'}}>
                <Icon icon="list" size={32} />
                <span style={{ fontSize: '32px', display: open ? 'inline-block' : 'none' }}>Liste</span>
            </div>
            <div style={{ marginTop: '10px', marginLeft:'12px'}}>
                <Icon icon="tag" size={32} color="" />
                <span style={{ fontSize: '32px', display: open ? 'inline-block' : 'none' }}>Etiket</span>
            </div>
        </Fragment>
    );

    return (
        <Fragment>
            <Sidebar sidebar={content} open={open} styles={style} shadow docked transitions>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
            </Sidebar>
        </Fragment>
    );
};
