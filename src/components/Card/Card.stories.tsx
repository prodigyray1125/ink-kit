import type { Meta, StoryObj } from "@storybook/react";
import { Card, type CardProps, CardContent } from "./index";
import { Tag } from "../Tag";
import { Button } from "../Button";
import { InkIcon } from "../..";
import { TitleAndDescription } from "./Content";

const meta: Meta<CardProps> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: (
      <CardContent.CallToAction
        title="Card Example"
        description="Ever wondered why keyboards aren't arranged in alphabetical order? Probably because someone in the 1870s had a really good time watching people hunt and peck for letters. QWERTY layout: the original practical joke that became a global standard."
        button={
          <Button variant="primary" size="lg">
            Button
          </Button>
        }
      />
    ),
    image: (
      <CardContent.Image
        mainLabels={
          <>
            <Tag variant="event">Tag 1</Tag>
            <Tag variant="event">Tag 2</Tag>
          </>
        }
      >
        <img
          src="https://picsum.photos/1024/576"
          alt="Card Image"
          width={1024}
          height={580}
        />
      </CardContent.Image>
    ),
    imageLocation: "left",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const ImageOnTheRight: Story = {
  args: {
    children: (
      <TitleAndDescription
        title="Image on the right"
        description="Why did the image move to the right? Because it was tired of being left out! Now it can finally see what's happening on the other side of the card. Some say it's getting a better view of the content this way."
      />
    ),
    imageLocation: "right",
  },
};

export const ImageOnTheTop: Story = {
  args: {
    children: (
      <TitleAndDescription
        title="Image on the top"
        description="After enjoying the view from the right side, our adventurous image decided to aim even higher! Now it's living the high life at the top of the card, looking down on all the content below. Talk about a promotion in position!"
      />
    ),
    imageLocation: "top",
  },
};

export const ImageWithMainAndSecondaryLabels: Story = {
  args: {
    children: (
      <TitleAndDescription
        title="Image with main and secondary labels"
        description="After exploring different positions, our image decided it needed some accessories! Now it's showing off its fancy collection of labels - both main and secondary ones. Like a fashionista with a new wardrobe, it's strutting its stuff with tags that make it stand out from the crowd!"
      />
    ),
    image: (
      <CardContent.Image
        mainLabels={
          <>
            <Tag variant="event">Tag 1</Tag>
            <Tag variant="event">Tag 2</Tag>
          </>
        }
        secondaryLabels={
          <>
            <Tag variant="event">Tag 3</Tag>
            <Tag variant="event">Tag 4</Tag>
          </>
        }
      >
        <img
          src="https://picsum.photos/1024/576"
          alt="Card Image"
          width={1024}
          height={580}
        />
      </CardContent.Image>
    ),
  },
};

/** This variant has a color independent of the theme. */
export const PurpleLightVariant: Story = {
  args: {
    variant: "light-purple",
  },
};

/** For a Tagline card, use `CardContent.Tagline` and no image. */
export const WithTagline: Story = {
  args: {
    image: undefined,
    imageLocation: undefined,
    children: (
      <CardContent.Tagline
        title="Do something now!"
        buttons={
          <>
            <Button variant="primary" size="lg">
              Button
            </Button>
            <Button variant="secondary" size="lg">
              Second Button
            </Button>
          </>
        }
      />
    ),
  },
};

/** Set the "secondary" variant and "clickable" to get a hover, use `asChild` to have an `a` tag as the root element, then use `CardContent.Link` to render the content. */
export const Link: Story = {
  args: {
    variant: "secondary",
    clickable: true,
    asChild: true,
    image: undefined,
    children: (
      <a href="#something" target="_self" className="ink:no-underline">
        <CardContent.Link
          icon={<InkIcon.Logo.Ink />}
          title="Join the Ink Revolution!"
          description="Did you know that Ink's design system is like a chameleon for your UI? Just like these color-changing lizards adapt to their environment, Ink components seamlessly blend into any design while maintaining their unique personality. Just fabulous, adaptable UI!"
        />
      </a>
    ),
  },
};

export const LargeLinks: Story = {
  args: {
    image: (
      <CardContent.Image mainLabels={<Tag variant="event">Main Label</Tag>}>
        <img
          src="https://picsum.photos/1024/576"
          alt="Card Image"
          width={1024}
          height={1024}
        />
      </CardContent.Image>
    ),
    children: (
      <>
        <TitleAndDescription
          title="Links Galore"
          description="Links are the backbone of the web! They connect us, guide us, and make the internet what it is today. At Ink, we love links so much we've made them beautiful, accessible, and a joy to use. Click around and experience the magic of web navigation!"
        />
        <CardContent.LargeLinks>
          <CardContent.LargeLink asChild>
            <a href="#design-tips" target="_self" className="ink:no-underline">
              Design Tips & Tricks
            </a>
          </CardContent.LargeLink>
          <CardContent.LargeLink asChild>
            <a href="#color-theory" target="_self" className="ink:no-underline">
              Color Theory 101
            </a>
          </CardContent.LargeLink>
          <CardContent.LargeLink asChild>
            <a href="#typography" target="_self" className="ink:no-underline">
              Typography Essentials
            </a>
          </CardContent.LargeLink>
          <CardContent.LargeLink asChild>
            <a
              href="#accessibility"
              target="_self"
              className="ink:no-underline"
            >
              Accessibility Best Practices
            </a>
          </CardContent.LargeLink>
          <CardContent.LargeLink asChild>
            <a href="#animations" target="_self" className="ink:no-underline">
              Animation Fundamentals
            </a>
          </CardContent.LargeLink>
          <CardContent.LargeLink asChild>
            <a href="#responsive" target="_self" className="ink:no-underline">
              Responsive Design Guide
            </a>
          </CardContent.LargeLink>
        </CardContent.LargeLinks>
      </>
    ),
  },
};

export const LargeCardInfo: Story = {
  args: {
    image: (
      <CardContent.Image mainLabels={<Tag variant="event">Main Label</Tag>}>
        <img
          src="https://picsum.photos/1024/576"
          alt="Card Image"
          width={1024}
          height={1024}
        />
      </CardContent.Image>
    ),
    children: (
      <>
        <TitleAndDescription title="Fun Activities Around Town" />
        <CardContent.CardInfos>
          <CardContent.CardInfo
            icon={<InkIcon.Apps className="ink:size-3" />}
            title="Pizza Making Class"
            description="Learn to toss dough and create your perfect pizza with our expert chefs."
          />
          <CardContent.CardInfo
            icon={<InkIcon.Bridge className="ink:size-3" />}
            title="Paint & Sip Night"
            description="Enjoy wine while creating your masterpiece in this relaxing art class."
          />
          <CardContent.CardInfo
            icon={<InkIcon.Social.Telegram className="ink:size-3" />}
            title="Live Jazz Night"
            description="Swing by for smooth tunes and great vibes at our local jazz club."
          />
          <CardContent.CardInfo
            icon={<InkIcon.Deposit className="ink:size-3" />}
            title="Community Garden"
            description="Get your hands dirty and learn about urban farming with neighbors."
          />

          <CardContent.CardInfo
            className="ink:lg:col-span-2"
            icon={<InkIcon.Sun className="ink:size-3" />}
            title="Weekend Food Festival"
            description="Sample delicious treats from local vendors and enjoy live entertainment all weekend long."
          />
        </CardContent.CardInfos>
      </>
    ),
  },
};

export const FullCard: Story = {
  args: {
    size: "noPadding",
    image: (
      <CardContent.Image>
        <img
          src="https://picsum.photos/1024/576"
          alt="Card Image"
          width={1024}
          height={580}
        />
      </CardContent.Image>
    ),
  },
};

export const FullCardWithImageOnTheRight: Story = {
  args: {
    size: "noPadding",
    imageLocation: "right",
    image: (
      <CardContent.Image>
        <img
          src="https://picsum.photos/1024/576"
          alt="Card Image"
          width={1024}
          height={580}
        />
      </CardContent.Image>
    ),
  },
};

export const CardWithSmallImage: Story = {
  args: {
    size: "small",
    children: (
      <TitleAndDescription
        title="Card with small image"
        description="This is a card with a small image."
        size="small"
      />
    ),
    image: (
      <CardContent.Image variant="square">
        <img
          src="https://picsum.photos/1024/576"
          alt="Card Image"
          width={128}
          height={128}
        />
      </CardContent.Image>
    ),
  },
};
