export interface SectionProps {
    id: string;
    title: string;
    content: React.ReactNode;
    className?: string;
    variant?: 'default' | 'hero' | 'feature';
}

export interface Section {
    id: string;
    component: React.ComponentType<any>;
    props: Record<string, any>;
}