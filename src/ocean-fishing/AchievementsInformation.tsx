import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Section from '../Section'
import Highlight from '../Highlight'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import OceanFishIcon from './OceanFishIcon'
import Tug from './Tug'
import { getStops, getBaitGroup } from './utils'
import * as maps from './maps'
import jellyfishMacro from './macros/jellyfish.ffmacro'
import seadragonsMacro from './macros/seadragons.ffmacro'
import octopodesMacro from './macros/octopodes.ffmacro'

const useStyles = makeStyles((theme) => ({
  achievementIcon: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: '0.5em',
    fontSize: '0.65em',
    verticalAlign: 'sub'
  },
  headerSub: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      display: 'block'
    }
  }
}))

type AchievementsInformationProps = {
  selectedRoute?: maps.DestinationStopTime
}

const AchievementsInformation = ({ selectedRoute }: AchievementsInformationProps) => {
  if (!selectedRoute) return null
  return (
    <>
      {maps.ACHIEVEMENTS_MAP[selectedRoute].map(achievement =>
        <AchievementInformation
          key={achievement}
          achievement={achievement}
          selectedRoute={selectedRoute}
        />
      )}
    </>
  )
}

type AchievementInformationProps = {
  achievement: number,
  selectedRoute: maps.DestinationStopTime
}

const AchievementInformation = ({ achievement, selectedRoute }: AchievementInformationProps) => {
  const classes = useStyles()
  const stops = getStops(selectedRoute)

  switch (achievement) {
    case 2563:
      return (
        <Section
          title={
            <>
              Octopodes Route
              <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
              <Typography display='inline' className={classes.headerSub}>
                catch 150 octopodes (18.75 each)
              </Typography>
            </>
          }
        >
          <RouteCardContainer>
            <RouteCard index={0} stop={stops[0]}>
              <CardContent>
                <Typography paragraph>
                  No octopodes here.
                </Typography>
                <Typography paragraph>
                  You may opt for no spectral here for an extended one in the next zone.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={1} stop={stops[1]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC–DH at 16-27s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29734) }
                  }, {
                    header: 'DH–IC–DH at <3s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29766) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Non-spectral</Typography>
                <Typography paragraph>
                  Can blind DH the Cyan Octopodes at 25s, or at 19s with a SS’d Jasperhead.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Only the instant <Tug strength={2} /> is Merman’s Mane; any later is not.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={2} stop={stops[2]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'DH–IC–DH at ≥5s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29773) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  The earlier <Tug strength={2} /> is Coccosteus.
                </Typography>
              </CardContent>
            </RouteCard>
          </RouteCardContainer>
          <Typography paragraph>
            Sample octopodes macro
          </Typography>
          <Highlight language='plaintext'>
            {octopodesMacro}
          </Highlight>
        </Section>
      )
    case 2564:
      return (
        <Section
          title={
            <>
              Sharks Route
              <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
              <Typography display='inline' className={classes.headerSub}>
                catch 200 sharks (25 each)
              </Typography>
            </>
          }
        >
          <RouteCardContainer>
            <RouteCard index={0} stop={stops[0]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC; DH–IC–DH post-spectral',
                    baitGroupProps: { showDH: true, ...getBaitGroup(28942) }
                  }, {
                    header: 'IC–DH',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29750) }
                  }, {
                    header: 'No buffs',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29751) }
                  }, {
                    header: 'DH–IC–DH',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29782) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Pre-spectral</Typography>
                <Typography paragraph>
                  Save GP when possible; IC if capped.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Hook <Tug strength={2} /> and <Tug strength={3} />. IC–DH if you catch a Ghost Shark; <Tug strength={3} /> is a blind DH–IC–DH.
                </Typography>
                <Typography variant='overline'>Post-spectral</Typography>
                <Typography paragraph>
                  Spend all remaining GP with blind DH–IC–DH Tarnished Sharks.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={1} stop={stops[1]}>
              <CardContent>
                <Typography paragraph>
                  No sharks here.
                </Typography>
                <Typography paragraph>
                  Try for Coral Manta?<br />(but save GP)
                </Typography>
                <Typography paragraph>
                  You may opt for no spectral here for an extended one in the next zone.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={2} stop={stops[2]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC–DH; DH–IC–DH post-spectral',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29735) }
                  }, {
                    header: 'No buffs',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29767) }
                  }, {
                    header: 'DH–IC–DH',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29770) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Pre-spectral</Typography>
                <Typography paragraph>
                  Can’t blind DH Chrome Hammerheads.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Hook <Tug strength={2} /> and <Tug strength={3} />. If you catch a Sweeper, can use IC if high on GP. <Tug strength={3} /> is a blind DH.
                </Typography>
                <Typography variant='overline'>Post-spectral</Typography>
                <Typography paragraph>
                  Can blind DH Chrome Hammerheads.
                </Typography>
              </CardContent>
            </RouteCard>
          </RouteCardContainer>
        </Section>
      )
    case 2565:
      return (
        <Section
          title={
            <>
              Jellyfish Route
              <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
              <Typography display='inline' className={classes.headerSub}>
                catch 150 jellyfish (18.75 each)
              </Typography>
            </>
          }
        >
          <RouteCardContainer>
            <RouteCard index={0} stop={stops[0]}>
              <CardContent>
                <Typography paragraph>
                  No jellyfish here.
                </Typography>
                <Typography paragraph>
                  You may opt for no spectral here for an extended one in the next zone.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={1} stop={stops[1]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'DH at <5s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29739) }
                  }, {
                    header: 'IC–DH at 4-8s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29757) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Non-spectral</Typography>
                <Typography paragraph>
                  Blind DH all <Tug strength={1} /> before 5s, and recast after 5s. IC is not necessary.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  While spectral is not recommended, it won’t kill your run.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={2} stop={stops[2]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC–DH at 6-10s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29762) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  A blind DH is possible, but it can be risky and unnecessary.
                </Typography>
              </CardContent>
            </RouteCard>
          </RouteCardContainer>
          <Typography paragraph>
            Sample jellyfish macro
          </Typography>
          <Highlight language='plaintext'>
            {jellyfishMacro}
          </Highlight>
        </Section>
      )
    case 2566:
      return (
        <Section
          title={
            <>
              Seadragons Route
              <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
              <Typography display='inline' className={classes.headerSub}>
                catch 100 seadragons (12.5 each)
              </Typography>
            </>
          }
        >
          <RouteCardContainer>
            <RouteCard index={0} stop={stops[0]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC–DH at 9-21s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29740) }
                  }, {
                    header: 'No buffs',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29763) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Non-spectral</Typography>
                <Typography paragraph>
                  Clouds and Fog weather will remove Shaggy Seadragons.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Spectral is bad. Sit on IC if you have it going into spectral instead of catching Aetheric Seadragons.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={1} stop={stops[1]}>
              <CardContent>
                <Typography paragraph>
                  No seadragons here.
                </Typography>
                <Typography paragraph>
                  You may opt for no spectral here for an extended one in the next zone.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={2} stop={stops[2]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC–DH',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29764) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Nothing to say about this.
                </Typography>
              </CardContent>
            </RouteCard>
          </RouteCardContainer>
          <Typography paragraph>
            Sample seadragons macro
          </Typography>
          <Highlight language='plaintext'>
            {seadragonsMacro}
          </Highlight>
        </Section>
      )
    case 2754:
      return (
        <Section
          title={
            <>
              Balloons Route
              <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
              <Typography display='inline' className={classes.headerSub}>
                catch 250 balloons (31.25 each)
              </Typography>
            </>
          }
        >
          <RouteCardContainer>
            <RouteCard index={0} stop={stops[0]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC–DH at 5-10s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32057) }
                  }, {
                    header: 'DH at <5s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32066) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Non-spectral</Typography>
                <Typography paragraph>
                  In general, IC–DH when possible and don’t rely heavily on spectrals.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Anomalocaris Saron appears at 5s.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={1} stop={stops[1]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC–DH at 10-16s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29732) }
                  }, {
                    header: 'IC–DH at 2-6s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29768) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography paragraph>
                  You may opt for no spectral here for an extended one in the next zone.
                </Typography>
                <Typography variant='overline'>Non-spectral</Typography>
                <Typography paragraph>
                  Lampfish can probably be a blind DH.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={2} stop={stops[2]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'No buffs at 2-5s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32095) }
                  }, {
                    header: 'DH at ≥11s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32098) }
                  }, {
                    header: 'IC–DH',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32105) }
                  }, {
                    header: 'IC–DH',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32109) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Non-spectral</Typography>
                <Typography paragraph>
                  Save GP when possible to blind DH Honeycomb Fish.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Switch to Krill to go for both Garum Jugs and Pearl Bombfish.
                </Typography>
              </CardContent>
            </RouteCard>
          </RouteCardContainer>
        </Section>
      )
    case 2755:
      return (
        <Section
          title={
            <>
              Crabs Route
              <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
              <Typography display='inline' className={classes.headerSub}>
                catch 250 crabs (31.25 each)
              </Typography>
            </>
          }
        >
          <RouteCardContainer>
            <RouteCard index={0} stop={stops[0]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC–DH at <12s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32055) }
                  }, {
                    header: 'DH–IC–DH at <4s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32065) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Non-spectral</Typography>
                <Typography paragraph>
                  In general, IC–DH when possible and don’t rely heavily on spectrals. Tortoiseshell Crab can be blind DH before 12s.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Hook all <Tug strength={2} />, but only the instant <Tug strength={2} /> is a blind DH.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={1} stop={stops[1]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'IC–DH at 9-21s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29741) }
                  }, {
                    header: 'IC–DH at 4-8s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(29777) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography paragraph>
                  You may opt for no spectral here for an extended one in the next zone.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={2} stop={stops[2]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'No buffs at 3-7s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32075) }
                  }, {
                    header: 'DH at ≥14s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32079) }
                  }, {
                    header: 'No Buffs',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32085) }
                  }, {
                    header: 'DH at ≥5s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32090) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Non-spectral</Typography>
                <Typography paragraph>
                  Save GP when possible to blind DH Bloodpolish Crabs.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Can blind DH Exterminators at 5s.
                </Typography>
              </CardContent>
            </RouteCard>
          </RouteCardContainer>
        </Section>
      )
    case 2756:
      return (
        <Section
          title={
            <>
              Mantas Route
              <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
              <Typography display='inline' className={classes.headerSub}>
                catch 25 mantas (solo)
              </Typography>
            </>
          }
        >
          <RouteCardContainer>
            <RouteCard index={0} stop={stops[0]}>
              <CardContent>
                <BaitList
                  baitGroups={[{
                    header: 'DH; DH-IC–DH post-spectral at 12-26s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32058) }
                  }, {
                    header: 'DH at <3s',
                    baitGroupProps: { showDH: true, ...getBaitGroup(32070) }
                  }]}
                />
              </CardContent>
              <CardContent>
                <Typography variant='overline'>Pre-spectral</Typography>
                <Typography paragraph>
                  IC or blind DH if capped, but save GP for spectral current.
                </Typography>
                <Typography variant='overline'>Spectral</Typography>
                <Typography paragraph>
                  Only the instant <Tug strength={3} /> is Jetborne Manta. Callichthyid appears at 5s.
                </Typography>
                <Typography variant='overline'>Post-spectral</Typography>
                <Typography paragraph>
                  Spend all remaining GP on mantas.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={1} stop={stops[1]}>
              <CardContent>
                <Typography paragraph>
                  No mantas here.
                </Typography>
                <Typography paragraph>
                  You may opt for no spectral here for an extended one in the next zone.
                </Typography>
              </CardContent>
            </RouteCard>
            <RouteCard index={2} stop={stops[2]}>
              {(() => {
                switch (stops[2]) {
                  case 'BN':
                    return (
                      <>
                        <CardContent>
                          <BaitList
                            baitGroups={[{
                              header: 'DH at ≥5s',
                              baitGroupProps: { showDH: true, ...getBaitGroup(32087) }
                            }]}
                          />
                        </CardContent>
                        <CardContent>
                          <Typography variant='overline'>Spectral</Typography>
                          <Typography paragraph>
                            Reel any <Tug strength={2} />. Beatific Vision and Gory Tuna go away at 5s. Go for IC–DH if it’s all you need, instead of hoping for more blind DHs.
                          </Typography>
                        </CardContent>
                      </>
                    )
                  case 'TD':
                    return (
                      <>
                        <CardContent>
                          <BaitList
                            baitGroups={[{
                              header: 'IC–DH at 4-5s',
                              baitGroupProps: { showDH: true, ...getBaitGroup(32111) }
                            }]}
                          />
                        </CardContent>
                        <CardContent>
                          <Typography variant='overline'>Spectral</Typography>
                          <Typography paragraph>
                            Reel any <Tug strength={2} />. Panoptes can possibly be a blind DH (needs confirmation). Don’t mooch Rothlyt Mussels for Panoptes; recast instead.
                          </Typography>
                        </CardContent>
                      </>
                    )
                }
              })()}
            </RouteCard>
          </RouteCardContainer>
        </Section>
      )
    default:
      return null
  }
}

export default AchievementsInformation
