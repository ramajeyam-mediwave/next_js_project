import React from 'react';
import Router from 'next/router';
import Image from 'next/image';

interface ProjectCardProps {
  heading1?: string;
  heading2?: string;
  content?: string;
  userdata?: any;
  addClass?: string;
  cardSize?: 'col-1' | 'col-2' | 'col-3' | 'col-4';
  show_line?: boolean;
  children?: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  heading1,
  heading2,
  content,
  userdata,
  addClass,
  cardSize = 'col-2',
  show_line,
  children,
}) => {
  return (
    <section className={`multicard_main ${addClass ? addClass : ''}`}>
      <div className='multi_head'>
        <span className='multi_heading animate-heading'>
          {heading1 && <h1>{heading1} </h1>}
          {heading2 && <h1>{heading2}</h1>}
        </span>
        {content && <p className='animate-subtitle'>{content}</p>}
        {children && <div>{children}</div>}
      </div>

      <div className={`multicard_body ${cardSize}`}>
        {userdata &&
          userdata.map((item: any, idx: number) => {
            const linearGradientStyle = `linear-gradient(220deg, ${item.LinearGradient.map(
              (stop: { color: string; percentage: string }) =>
                stop.color + ' ' + stop.percentage
            ).join(', ')})`;

            return (
              <div
                onClick={() => Router.push(`${item.cardLink}`)}
                className={`project_card_block cursor-pointer ${
                  show_line ? 'show_line' : ''
                }`}
                key={idx.toString()}
              >
                <div
                  style={{ background: linearGradientStyle }}
                  className={`project_Img_block ${
                    item.heading.includes('Alder Play') ? 'w-alder' : ''
                  }`}
                >
                  <Image src={item.image} alt='images' />
                </div>
                <h2>{item.heading}</h2>
                <div className='flow-list-block'>
                  {item.flow.map((flowItem: string, flowIdx: number) => (
                    <span className='flow-list' key={flowIdx.toString()}>
                      {flowItem}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
