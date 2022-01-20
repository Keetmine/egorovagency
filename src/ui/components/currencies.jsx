import React, {Component} from 'react';
import styled from 'styled-components';

export const UICurrenciesTable = styled.table`
    display: table;
    & th, & td {
        padding: 6px 12px;
        text-align: left;
    }
    & .copy {
        cursor: pointer
    }
`;

export class CurrenciesTable extends Component {

    copy = async (value) => {
        await navigator.clipboard.writeText(value);
        console.log('cpied')
    }

    render() {
        const {headColumn, bodyColumn, action} = this.props
        return <UICurrenciesTable {...this.props}>
            <thead>
            <tr>
                {headColumn && headColumn.map(item => (
                        <th>{item}</th>
                    )
                )}
            </tr>
            </thead>
            <tbody>
            {bodyColumn && bodyColumn.map(item => (
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.code}</td>
                        <td>{item.value}</td>
                        <td>
                            {action && action === 'copy' ?
                                <span onClick={() => this.copy(item.value)} title={'COPY'} className={'copy'}>
                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M15 4H19C20.6569 4 22 5.34315 22 7V21C22 22.6569 20.6569 24 19 24H10C8.34315 24 7 22.6569 7 21V20H3C1.34315 20 0 18.6569 0 17V6C0 2.68629 2.68629 0 6 0H12C13.6569 0 15 1.34315 15 3V4ZM15 6V17C15 18.6569 13.6569 20 12 20H9V21C9 21.5523 9.44771 22 10 22H19C19.5523 22 20 21.5523 20 21V7C20 6.44772 19.5523 6 19 6H15ZM2 7V17C2 17.5523 2.44772 18 3 18H12C12.5523 18 13 17.5523 13 17V3C13 2.44772 12.5523 2 12 2H7V6C7 6.55228 6.55228 7 6 7H2ZM2.12602 5H5V2.12602C3.59439 2.4878 2.4878 3.59439 2.12602 5Z"
                                              fill="black"/>
                                    </svg>
                                </span>
                                : action && action === 'delete' ?
                                    <span onClick={() => this.delete(item)} title={'COPY'} className={'copy'}>
                                          <svg width="20" height="24" viewBox="0 0 20 24" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M3 21C3 21.5523 3.44772 22 4 22H16C16.5523 22 17 21.5523 17 21V9H3V21ZM15 3H17C18.6569 3 20 4.34315 20 6V8C20 8.55229 19.5523 9 19 9V21C19 22.6569 17.6569 24 16 24H4C2.34315 24 1 22.6569 1 21V9C0.447715 9 0 8.55229 0 8V6C0 4.34315 1.34315 3 3 3H5C5 1.34315 6.34315 0 8 0H12C13.6569 0 15 1.34315 15 3ZM5 13C5 12.4477 5.44772 12 6 12C6.55228 12 7 12.4477 7 13V18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18V13ZM9 13C9 12.4477 9.44771 12 10 12C10.5523 12 11 12.4477 11 13V18C11 18.5523 10.5523 19 10 19C9.44771 19 9 18.5523 9 18V13ZM13 13C13 12.4477 13.4477 12 14 12C14.5523 12 15 12.4477 15 13V18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18V13ZM8 2C7.44772 2 7 2.44772 7 3H13C13 2.44772 12.5523 2 12 2H8ZM2 7H18V6C18 5.44772 17.5523 5 17 5H3C2.44772 5 2 5.44772 2 6V7Z"
                                                  fill="black"/>
                                        </svg>
                                    </span>
                                    : ''
                            }
                        </td>
                    </tr>
                )
            )}
            </tbody>
            {this.props.children}
        </UICurrenciesTable>;
    }
}