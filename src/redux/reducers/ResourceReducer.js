import {
    GET_INTRODUCTION,
    GET_WRAP_UP,
    GET_RESOURCES,
    MARK_INTRODUCTION_COMPLETE,
    MARK_RESOURCE_COMPLETE,
    MARK_WRAP_UP_COMPLETE,
    CLOSE_INTRO
} from '../actions/types';

const initialState = {
    introParagraphOpen: true,
    introduction: [
        {
            id: 1,
            title: `Why Bitcoin Matters`,
            videoId: 'q0XxsabgJEI',
            description: "Aleks Svetski talks about the difference between Bitcoin and the blockchain, why Bitcoin really matters and the future of money plus much more.",
            completed: false
        },
        {
            id: 2,
            title: `The real value of bitcoin and crypto currency technology - The Blockchain explained`,
            videoId: 'YIVAluSL9SU',
            description: "Blockchain and Bitcoin explained in five minutes: Blockchain technology will drastically change our lives.",
            completed: false
        },
        {
            id: 3,
            title: `What is Bitcoin? (v2)`,
            videoId: 'Gc2en3nHxA4',
            description: "The most watched Bitcoin introduction video ever. Updated in April 2014, this video explains how bitcoin works and the importance of this paradigm shifting technology.",
            completed: false
        },
    ],
    resources: [
        {
            id: 1,
            title: `The Essence of How Bitcoin Works (Non-Technical)`,
            videoId: 't5JGQXCTe3c',
            description: 'A brief intro to the main ideas behind How Bitcoin Works, including how money is transferred, who keeps track of it, and how the whole thing is secured.',
            completed: false
        },
        {
            id: 2,
            title: `How Bitcoin Works in 5 Minutes (Technical)`,
            videoId: 'l9jOJk30eQs',
            description: 'A short introduction to how Bitcoin Works.',
            completed: false
        },
        {
            id: 3,
            title: `But how does bitcoin actually work?`,
            videoId: 'bBC-nXj3Ng4',
            description: 'The math behind cryptocurrencies.',
            completed: false
        },
        {
            id: 4,
            title: `How Bitcoin Works Under the Hood`,
            videoId: 'Lx9zgZCMqXE',
            description: 'A somewhat technical explanation of how Bitcoin works.',
            completed: false
        },
        {
            id: 5,
            title: "Bitcoin 101 | Balaji Srinivasan",
            videoId: "JIxwTx7o_B4",
            description: "from Khosla Ventures",
            completed: false
        },
        {
            id: 6,
            title: "The Trust Machine (Bitcoin documentary)",
            videoId: "ZKwqNgG-Sv4",
            description: "Overview of the key insights behind Bitcoin. Easy explanation, what is bitcoin, what is blockchain, bitcoin value, simple bitcoin explanation, bitcoin lesson, bitcoin vs. gold.",
            completed: false
        },
        {
            id: 7,
            title: "Bitcoin Protocol Explained 1 - Bitcoin paper broken down step by step.",
            videoId: "UieiMU-ImvI",
            description: "In this video miniseries, the original Bitcoin paper is broken down. The paper is extremely condensed and is not very friendly to people who are not very familiar with the field. Since Bitcoin is for everyone, not just computer scientists and cryptologists, it is important than anyone can understand the basics of how Bitcoin and its protocol works as well as the problems it solves. It is my goal to help anyone confused about how the Bitcoin system works, and break it down so it can be understood by anyone. I may eventually cover mining as well specifically, but it is more important that most people understand the protocol and how it works as a system. ",
            completed: false
        },
        {
            id: 8,
            title: "Bitcoin Protocol for Dummies #2 - Intro section",
            videoId: "JQzepQoZYi0",
            description: "This Bitcoin video covers the introduction section of the bitcoin protocol paper.",
            completed: false
        },
        {
            id: 9,
            title: "Bitcoin Protocol Explained #3 - Transactions",
            videoId: "tW3zHIOudgo",
            description: "In this Bitcoin Protocol tutorial video, the Transactions section of the Bitcoin protocol paper is explained. Of course, however, with this proposed solution, we have another issue. We can for sure confirm that a user owns or at least owned a coin, and we can confirm the chain of owners, but we cannot confirm just yet that this coin was not double spent. Have no fear, this is coming!",
            completed: false
        },
        {
            id: 10,
            title: "Bitcoin Protocol Explained - Timestamp Server / Global Ledger",
            videoId: "nO6FXU_zOog",
            description: "In this short video, the Bitcoin timestamp server / global ledger is discussed. As usual, however, we present ourselves with an ending challenge which is to be covered in the, you guessed it, next video!",
            completed: false
        },
        {
            id: 11,
            title: "Bitcoin Protocol Tutorial: Proof of Work",
            videoId: "EWfGzeF3Xmw",
            description: "In this Bitcoin protocol tutorial video, the notion of Proof of Work is discussed. The idea of proof of work, normally, is to protect against spam and DoS attacks. With bitcoin, however, it is used to secure the blockchain, requiring that someone must re-do large amounts of computer processing to fake things in the blockchain.",
            completed: false
        },
        {
            id: 12,
            title: "(Optional) Bitcoin Protocol: Proof of Work shown in Python Code",
            videoId: "K_Ac1Ko8-p8",
            description: "In this Bitcoin protocol tutorial video, Proof of Work is shown using actual code. Up to this point, the topic of Proof of Work has been discussed, though may still be a foggy topic that is not fully understood by many. The purposes of this video is to show you a real example of proof of work in action, and why proof of work actually works.",
            completed: false
        },
        {
            id: 13,
            title: "Bitcoin Protocol Tutorial #7: The Network",
            videoId: "t_laVHXg64s",
            description: "In this Bitcoin Protocol tutorial video, the network structure is discussed.",
            completed: false
        },
        {
            id: 14,
            title: "Bitcoin Protocol Tutorial #8: Incentive",
            videoId: "Q8KtQ3uM1tk",
            description: "In this Bitcoin protocol paper tutorial, the incentive section is covered. The question is, why take part in the network and help with transactions? Also, why choose to be a part of the network rather than using your computing power to attack the network?",
            completed: false
        },
        {
            id: 15,
            title: "Bitcoin Protocol Tutorial #9 - Reclaiming Disk Space",
            videoId: "yZgaxg0JzcU",
            description: "Welcome to another Bitcoin Protocol tutorial video! This video covers the Reclaiming Disk Space section of the Bitcoin paper by Satoshi Nakamoto.",
            completed: false
        },
        {
            id: 16,
            title: "Bitcoin Protocol Tutorial: Simplified Payment Verification",
            videoId: "24lMzKVqcS8",
            description: "This Bitcoin protocol tutorial video covers the simplified payment verification section in the bitcoin paper. ",
            completed: false
        },
        {
            id: 17,
            title: "Bitcoin Protocol - Combining and Splitting Value",
            videoId: "qINf8hdnebg",
            description: "This Bitcoin protocol tutorial covers the combining and splitting value section of the Bitcoin paper.",
            completed: false
        },
        {
            id: 18,
            title: "Bitcoin Protocol Tutorial - Privacy Section",
            videoId: "Wgyb5y4nX_g",
            description: "This Bitcoin protocol tutorial covers the privacy section of the paper, and how privacy is structured.",
            completed: false
        },
        {
            id: 19,
            title: "Bitcoin Protocol Tutorial - Conclusion of the Paper",
            videoId: "P7D4-EE0HRw",
            description: "In this video, the Bitcoin protocol paper is concluded and wrapped up. There will be some more videos to come regarding the structure of Bitcoin. This paper only outlines the bitcoin structure, but does not go very deep into it. There are also many other topics for discussion here.",
            completed: false
        },
        {
            id: 20,
            title: "Bitcoin - Cryptographic hash function",
            videoId: "0WiTaBI82Mc",
            description: "What cryptographic hash functions are and what properties are desired of them.",
            completed: false
        },
        {
            id: 21,
            title: "Bitcoin - Digital Signatures",
            videoId: "Aq3a-_O2NcI",
            description: "A high-level explanation of digital signature schemes, which are a fundamental building block in many cryptographic protocols.",
            completed: false
        },
        {
            id: 22,
            title: "Bitcoin - Transaction records",
            videoId: "9-9_v1wSPBQ",
            description: "The basic mechanics of a bitcoin transaction between two parties and what is included within a given bitcoin transaction record.",
            completed: false
        },
        {
            id: 23,
            title: "Bitcoin - Proof of work",
            videoId: "9V1bipPkCTU",
            description: "An explanation of cryptographic proof-of-work protocols, which are used in various cryptographic applications and in bitcoin mining.",
            completed: false
        },
        {
            id: 24,
            title: "Bitcoin - Transaction block chains",
            videoId: "QzDO44oZWtE",
            description: "The mechanics of a bitcoin transaction block chain, which is a construct that is generated by bitcoin miners and functions as a global ledger for recording and validating bitcoins.",
            completed: false
        },
        {
            id: 25,
            title: "Bitcoin - The money supply",
            videoId: "JuWYLAtz3Y4",
            description: "The mechanisms by which the supply of bitcoins is controlled. ",
            completed: false
        },
        {
            id: 26,
            title: "Bitcoin - The security of transaction block chains",
            videoId: "8zgvzmKZ5vo",
            description: "A detailed explanation of what makes bitcoin transaction block chains secure. ",
            completed: false
        },
    ],
    wrapUp: [
        {
            id: 1,
            title: `The Benefits Of RAE Token vs. Cash`,
            videoId: 'c81oRw7iOQQ',
            description: "When creators and content providers on Rokfin are rewarded in RAE Tokens instead of cash, they get to participate in the growth of the network in a way that cash simply wouldn't allow. Rokfin founder and CEO Martin Floreani and VP of Operations Scott Augustine discuss this topic in detail.\n",
            completed: false
        },
        {
            id: 2,
            title: `Bitcoin Maximalists Are Arrogant And Hypocritical`,
            videoId: 'annIz86jAkg',
            description: "Rokfin founder and CEO Martin Floreani and Rokfin VP of Operations Scott Augustine have a lively discussion about cryptocurrency enthusiasts who believe only in Bitcoin and cast aside all other tokens as worthless.",
            completed: false
        },
        {
            id: 3,
            title: `A Media Model Where All Stakeholders Are Aligned`,
            videoId: 'elHRR1UWviQ',
            description: "When creators and content providers have the same financial incentives as media platforms, they each benefit. This alignment is not some abstract concept. It's happening right now on Rokfin through the RAE Token. Learn more in this conversation between Rokfin founder and CEO Martin Floreani and Rokfin VP of Operations Scott Augustine.",
            completed: false
        },
        {
            id: 4,
            title: `What Determines The RAE Token Price`,
            videoId: 'rz1l9XZX1LQ',
            description: "The price of the RAE Token is a function of the demand for content on the RAE ecosystem (i.e.  Rokfin) and the supply of RAE Tokens. Rokfin founder and CEO Martin Floreani and VP of Operations Scott Augustine discuss these topics and more.",
            completed: false
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_INTRODUCTION:
            return {
                ...state.introduction,
            };
        case GET_RESOURCES:
            return {
                ...state.resources,
            };
        case GET_WRAP_UP:
            return {
                ...state.wrapUp,
            };
        case MARK_INTRODUCTION_COMPLETE:
            state.introduction[action.payload.id].completed = true;
            return {
                ...state
            };
        case MARK_RESOURCE_COMPLETE:
            state.resources[action.payload.id].completed = true;
            return {
                ...state
            };
        case MARK_WRAP_UP_COMPLETE:
            state.wrapUp[action.payload.id].completed = true;
            return {
                ...state
            };
        case CLOSE_INTRO:
            state.introParagraphOpen = false;
            return {
                ...state,
            };
        default:
            return state;
    }
}
