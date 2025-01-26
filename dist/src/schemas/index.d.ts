declare const _default: {
    space: {
        title: string;
        type: string;
        properties: {
            name: {
                type: string;
                title: string;
                minLength: number;
                maxLength: number;
            };
            private: {
                type: string;
            };
            about: {
                type: string;
                title: string;
                maxLength: number;
            };
            guidelines: {
                type: string;
                format: string;
                title: string;
                maxLength: number;
            };
            template: {
                type: string;
                title: string;
                maxLength: number;
            };
            terms: {
                type: string;
                title: string;
                format: string;
                maxLength: number;
            };
            avatar: {
                type: string;
                title: string;
                format: string;
                maxLength: number;
            };
            cover: {
                type: string;
                title: string;
                format: string;
                maxLength: number;
            };
            location: {
                type: string;
                title: string;
                maxLength: number;
            };
            website: {
                type: string;
                title: string;
                format: string;
                maxLength: number;
            };
            twitter: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            coingecko: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            github: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            email: {
                type: string;
                title: string;
                maxLength: number;
            };
            network: {
                type: string;
                snapshotNetwork: boolean;
                title: string;
                minLength: number;
                maxLength: number;
            };
            symbol: {
                type: string;
                title: string;
                minLength: number;
                maxLength: number;
            };
            skin: {
                type: string;
                title: string;
                maxLength: number;
            };
            domain: {
                type: string;
                title: string;
                maxLength: number;
                format: string;
            };
            discussions: {
                type: string;
                format: string;
                title: string;
                maxLength: number;
            };
            discourseCategory: {
                type: string;
                minimum: number;
                title: string;
            };
            strategies: {
                type: string;
                minItems: number;
                maxItemsWithSpaceType: {
                    default: number;
                    turbo: number;
                };
                uniqueItems: boolean;
                items: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                            maxLength: number;
                            title: string;
                        };
                        network: {
                            type: string;
                            maxLength: number;
                            title: string;
                            snapshotNetwork: boolean;
                        };
                        params: {
                            type: string;
                            title: string;
                        };
                    };
                    required: string[];
                    additionalProperties: boolean;
                };
                title: string;
            };
            members: {
                type: string;
                maxItems: number;
                items: {
                    type: string;
                    format: string;
                };
                title: string;
                uniqueItems: boolean;
            };
            admins: {
                type: string;
                maxItems: number;
                items: {
                    type: string;
                    format: string;
                };
                title: string;
                uniqueItems: boolean;
            };
            moderators: {
                type: string;
                maxItems: number;
                items: {
                    type: string;
                    format: string;
                };
                title: string;
                uniqueItems: boolean;
            };
            filters: {
                type: string;
                properties: {
                    defaultTab: {
                        type: string;
                    };
                    minScore: {
                        type: string;
                        minimum: number;
                    };
                    onlyMembers: {
                        type: string;
                    };
                    invalids: {
                        type: string;
                        items: {
                            type: string;
                            maxLength: number;
                        };
                        title: string;
                    };
                };
                additionalProperties: boolean;
            };
            validation: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        maxLength: number;
                        title: string;
                    };
                    params: {
                        type: string;
                        title: string;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            voteValidation: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        maxLength: number;
                        title: string;
                    };
                    params: {
                        type: string;
                        title: string;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            followValidation: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        maxLength: number;
                        title: string;
                    };
                    params: {
                        type: string;
                        title: string;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            delegationPortal: {
                type: string;
                properties: {
                    delegationType: {
                        type: string;
                        title: string;
                        description: string;
                        anyOf: {
                            const: string;
                            title: string;
                        }[];
                    };
                    delegationContract: {
                        type: string;
                        title: string;
                        description: string;
                        examples: string[];
                        anyOf: {
                            format: string;
                        }[];
                        errorMessage: string;
                    };
                    delegationNetwork: {
                        type: string;
                        title: string;
                        description: string;
                        anyOf: ({
                            snapshotNetwork: boolean;
                            starknetNetwork?: undefined;
                        } | {
                            starknetNetwork: boolean;
                            snapshotNetwork?: undefined;
                        })[];
                        errorMessage: string;
                    };
                    delegationApi: {
                        type: string;
                        format: string;
                        title: string;
                        description: string;
                        examples: string[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            allowAlias: {
                type: string;
            };
            plugins: {
                type: string;
            };
            voting: {
                type: string;
                properties: {
                    delay: {
                        type: string;
                        minimum: number;
                        maximum: number;
                        errorMessage: {
                            maximum: string;
                        };
                    };
                    period: {
                        type: string;
                        minimum: number;
                        maximum: number;
                        errorMessage: {
                            maximum: string;
                        };
                    };
                    type: {
                        type: string;
                        title: string;
                    };
                    quorum: {
                        type: string;
                        minimum: number;
                    };
                    quorumType: {
                        type: string;
                        enum: string[];
                    };
                    blind: {
                        type: string;
                    };
                    hideAbstain: {
                        type: string;
                    };
                    aliased: {
                        type: string;
                    };
                    privacy: {
                        type: string;
                        enum: string[];
                    };
                };
                additionalProperties: boolean;
            };
            categories: {
                type: string;
                maxItems: number;
                items: {
                    type: string;
                    enum: string[];
                };
            };
            treasuries: {
                type: string;
                maxItems: number;
                uniqueItems: boolean;
                items: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                            title: string;
                            examples: string[];
                            minLength: number;
                            maxLength: number;
                        };
                        address: {
                            type: string;
                            title: string;
                            examples: string[];
                            anyOf: {
                                format: string;
                            }[];
                            errorMessage: string;
                        };
                        network: {
                            type: string;
                            title: string;
                            anyOf: ({
                                snapshotNetwork: boolean;
                                starknetNetwork?: undefined;
                            } | {
                                starknetNetwork: boolean;
                                snapshotNetwork?: undefined;
                            })[];
                            errorMessage: string;
                        };
                    };
                    required: string[];
                    additionalProperties: boolean;
                };
            };
            labels: {
                type: string;
                maxItems: number;
                uniqueItems: boolean;
                items: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                            title: string;
                            minLength: number;
                            maxLength: number;
                        };
                        name: {
                            type: string;
                            title: string;
                            minLength: number;
                            maxLength: number;
                        };
                        description: {
                            type: string;
                            title: string;
                            maxLength: number;
                        };
                        color: {
                            type: string;
                            title: string;
                            format: string;
                        };
                    };
                    required: string[];
                    additionalProperties: boolean;
                };
            };
            parent: {
                type: string;
                title: string;
            };
            children: {
                type: string;
                maxItems: number;
                title: string;
                items: {
                    type: string;
                };
                uniqueItems: boolean;
            };
            boost: {
                type: string;
                properties: {
                    enabled: {
                        type: string;
                    };
                    bribeEnabled: {
                        type: string;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    proposal: {
        title: string;
        type: string;
        properties: {
            name: {
                type: string;
                title: string;
                minLength: number;
                maxLength: number;
            };
            body: {
                type: string;
                title: string;
                minLength: number;
                maxLengthWithSpaceType: {
                    default: number;
                    turbo: number;
                };
            };
            discussion: {
                type: string;
                format: string;
                title: string;
                maxLength: number;
            };
            choices: {
                type: string;
                title: string;
                minItems: number;
                maxLengthWithSpaceType: {
                    default: number;
                    turbo: number;
                };
            };
            labels: {
                type: string;
                title: string;
                maxItems: number;
                uniqueItems: boolean;
                items: {
                    type: string;
                    minLength: number;
                    maxLength: number;
                    pattern: string;
                };
            };
            type: {
                type: string;
                enum: string[];
            };
            snapshot: {
                type: string;
                title: string;
            };
            start: {
                type: string;
                title: string;
                minimum: number;
                maximum: number;
            };
            end: {
                type: string;
                title: string;
                minimum: number;
                maximum: number;
            };
            metadata: {
                type: string;
                title: string;
            };
            app: {
                type: string;
                title: string;
                maxLength: number;
            };
            privacy: {
                type: string;
                enum: string[];
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    updateProposal: {
        title: string;
        type: string;
        properties: {
            proposal: {
                type: string;
                title: string;
            };
            name: {
                type: string;
                title: string;
                minLength: number;
                maxLength: number;
            };
            body: {
                type: string;
                title: string;
                minLength: number;
                maxLengthWithSpaceType: {
                    default: number;
                    turbo: number;
                };
            };
            discussion: {
                type: string;
                format: string;
                title: string;
                maxLength: number;
            };
            choices: {
                type: string;
                title: string;
                minItems: number;
                maxLengthWithSpaceType: {
                    default: number;
                    turbo: number;
                };
            };
            labels: {
                type: string;
                title: string;
                maxItems: number;
                uniqueItems: boolean;
                items: {
                    type: string;
                    minLength: number;
                    maxLength: number;
                    pattern: string;
                };
            };
            type: {
                enum: string[];
            };
            metadata: {
                type: string;
                title: string;
            };
            privacy: {
                type: string;
                enum: string[];
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    vote: {
        title: string;
        type: string;
        properties: {
            proposal: {
                type: string;
                title: string;
            };
            choice: {
                type: string[];
                title: string;
            };
            metadata: {
                type: string;
                title: string;
            };
            reason: {
                type: string;
                title: string;
                maxLength: number;
            };
            app: {
                type: string;
                title: string;
                maxLength: number;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    profile: {
        title: string;
        type: string;
        properties: {
            name: {
                type: string;
                title: string;
                maxLength: number;
            };
            about: {
                type: string;
                title: string;
                maxLength: number;
            };
            avatar: {
                type: string;
                title: string;
                format: string;
                maxLength: number;
            };
            cover: {
                type: string;
                title: string;
                format: string;
                maxLength: number;
            };
            twitter: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            github: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            lens: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            farcaster: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
        };
        required: never[];
        additionalProperties: boolean;
    };
    statement: {
        title: string;
        type: string;
        properties: {
            about: {
                type: string;
                format: string;
                title: string;
                maxLength: number;
            };
            statement: {
                type: string;
                format: string;
                title: string;
                maxLength: number;
            };
            discourse: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            network: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            status: {
                enum: string[];
                title: string;
            };
        };
        required: never[];
        additionalProperties: boolean;
    };
    zodiac: {
        title: string;
        type: string;
        properties: {
            safes: {
                title: string;
                type: string;
                maxItems: number;
                items: {
                    type: string;
                    properties: {
                        network: {
                            title: string;
                            type: string;
                            snapshotNetwork: boolean;
                        };
                        multisend: {
                            title: string;
                            type: string;
                        };
                        realityAddress: {
                            title: string;
                            type: string;
                        };
                        umaAddress: {
                            title: string;
                            type: string;
                        };
                    };
                    additionalProperties: boolean;
                };
            };
            additionalProperties: boolean;
        };
    };
    alias: {
        title: string;
        type: string;
        properties: {
            alias: {
                type: string;
                format: string;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
};
export default _default;
