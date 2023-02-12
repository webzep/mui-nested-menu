import { FC, ReactNode } from 'react';
import { Card, Row } from 'ui';

type SampleBoxProps = {
    children?: ReactNode;
    contrast?: boolean;
};

export const SampleBox: FC<SampleBoxProps> = ({ children }) => {
    return (
        <Card>
            <Row justify="space-around">{children}</Row>
        </Card>
    );
};
