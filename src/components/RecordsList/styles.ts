import { Trash } from 'phosphor-react';
import styled from 'styled-components';

export const RecordsTable = styled.div`
  flex: 1;
  overflow: hidden;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme.gray};
      padding: 1rem;
      text-align: center;
      color: ${(props) => props.theme.primary};
      font-size: 0.875rem;
      line-height: 1.6;
      text-transform: uppercase;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    tr {
      :hover {
        background-color: ${(props) => props.theme.mediumGray};
      }
    }
    td {
      background-color: ${(props) => props.theme.gray};

      border-top: 4px solid ${(props) => props.theme.darkGray};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      text-align: center;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      width: 10rem;

      &:first-child {
        width: 30%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
        span {
          :hover {
            color: ${(props) => props.theme.primary};
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  :hover {
    color: ${(props) => props.theme.yellow};
  }
`;

export const TrashIcon = styled(Trash)`
  :hover {
    color: ${(props) => props.theme.primary};
  }
`;
