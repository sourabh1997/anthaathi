import * as React from 'react';
import { useStyletron } from 'baseui';
import {
  StickyContainer,
  StickyContainerWrapper,
  StickySidebar,
  StickySidebarContent,
  StickySidebarDivider,
} from '../../Features/IssueTracker/Components/StickySidebar';
import { FILL, Tab, Tabs } from 'baseui/tabs-motion';
import { Button, KIND, SIZE } from 'baseui/button';
import { Block } from 'baseui/block';
import { Icon } from '../../Features/Core/Components/Icon';
import { NotificationCustomizationByIssue } from '../../Features/IssueTracker/Components/NotificationCustomizationByIssue';
import { LabelRenderer } from '../../Features/IssueTracker/Components/LabelRenderer';
import { HeadingMedium, LabelSmall } from 'baseui/typography';
import { FilesSidebar } from '../../Features/IssueTracker/Components/FilesSidebar';
import {
  TimelineBadge,
  TimelineItem,
  TimelineItemBody,
} from '../../Features/Timeline/Components/TimelineItem';
import { AddCommentTextbox } from '../../Features/Timeline/Components/AddCommentTextbox';
import {
  TimelineItemWrapper,
  TimelineStatus,
  TimelineStatusBody,
  TimelineStatusTitleWrapper,
  TimelineWrapper,
} from '../../Features/Timeline/Components/TimelineStatus';
import { TaskList } from '../../Features/Tasks/Components/TaskList';
import { SidebarSelectorText } from '../../Features/IssueTracker/Components/SidebarSelectorText';
import { SidebarSelectorDate } from '../../Features/IssueTracker/Components/SidebarSelectorDate';
import CommentBox from '../../Features/Timeline/Components/CommentBox';

export function TaskTimeLine() {
  const [css, $theme] = useStyletron();
  const [activeKey, setActiveKey] = React.useState('0');

  const override = {
    Tab: {
      style: {
        ...$theme.typography.LabelSmall,
        fontFamily: $theme.typography.headingFontFamily,
        borderRadius: $theme.borders.buttonBorderRadius,
      },
    },
  };

  return (
    <div
      className={css({
        maxWidth: '1600px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        [$theme.mediaQuery.small]: {
          flexDirection: 'column',
        },
        [$theme.mediaQuery.medium]: {
          flexDirection: 'row',
        },
        [$theme.mediaQuery.large]: {
          flexDirection: 'row',
        },
      })}
    >
      <StickyContainer>
        <StickyContainerWrapper>
          <TimelineWrapper>
            <HeadingMedium marginTop="scale400" marginBottom="scale800">
              <LabelSmall>#1234</LabelSmall>
              Hello world
            </HeadingMedium>
          </TimelineWrapper>

          <CommentBox />
          <CommentBox />
          <CommentBox />
          <AddCommentTextbox />
        </StickyContainerWrapper>
      </StickyContainer>

      <StickySidebar>
        <StickySidebarContent>
          <Tabs
            activeKey={activeKey}
            onChange={({ activeKey }) => {
              setActiveKey(activeKey as string);
            }}
            activateOnFocus
            fill={FILL.fixed}
          >
            <Tab title="Manage" overrides={override}>
              <SidebarSelectorText
                label="Assigned"
                list={[
                  {
                    id: '1',
                    name: 'kedar',
                  },
                  {
                    id: '2',
                    name: 'chandu',
                  },
                ]}
              />

              <StickySidebarDivider />

              <SidebarSelectorText label="Project" />

              <StickySidebarDivider />

              <SidebarSelectorText label="Label" />

              {/* <LabelRenderer /> */}

              <StickySidebarDivider />

              <SidebarSelectorDate label="Due date" />

              <StickySidebarDivider />

              <NotificationCustomizationByIssue />

              <StickySidebarDivider />

              <Block marginTop="scale400">
                <Button size={SIZE.mini} kind={KIND.tertiary}>
                  <Icon icon="lock" />
                  <span className={css({ width: '8px' })} />
                  LOCK
                </Button>

                <Button
                  size={SIZE.mini}
                  kind={KIND.tertiary}
                  $style={{
                    ':hover': { backgroundColor: $theme.colors.negative50 },
                  }}
                >
                  <Icon icon="minus-circle-o" />
                  <span className={css({ width: '8px' })} />
                  CLOSE ISSUE
                </Button>
              </Block>
            </Tab>
            <Tab title="Tasks" overrides={override}>
              <TaskList />
            </Tab>
            <Tab title="Files" overrides={override}>
              <FilesSidebar />
            </Tab>
          </Tabs>
        </StickySidebarContent>
      </StickySidebar>
    </div>
  );
}
