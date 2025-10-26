import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import rrulePlugin from '@fullcalendar/rrule'
import deLocale from '@fullcalendar/core/locales/de'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

// https://fullcalendar.io/docs/react
// https://fullcalendar.io/docs/list-view
// https://fullcalendar.io/docs/event-object
// https://fullcalendar.io/docs/rrule-plugin
// https://dateutil.readthedocs.io/en/stable/rrule.html
// https://fullcalendar.io/docs/google-calendar

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ googleCalendarPlugin, rrulePlugin, listPlugin ]}
      googleCalendarApiKey='AIzaSyAdplIqmONF4uGdW8d4ATAoMsfTQYbwYZc'
      initialView='listYear'
      height="auto"
      weekends={true}
      showNonCurrentDates={false}
      locale={deLocale}
      buttonText={{
        month: 'Monat',
        year: 'Jahr'  
      }}
      headerToolbar={{
        left: '',
        center: 'title',
        right: 'listMonth listYear prev,next'
      }}
      listDayFormat={{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        weekday: 'long'
      }}
      listDaySideFormat={false}
      allDayText='ganztägig'
      // The Event URL ends with the Base64 Encoding of the GoogleCalendarId "<id>@g".
      eventSources={[
          {
            // Base64: ZmYwMDg2ZjE4ZWYzMGM0MTc2MWFlNjA3OTAxYTlkZDM4ODhmYTM0ZTY0MDhmY2VkOTc4NWNmNWExZjFiNjA4Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t
            className: 'vorstand',
            googleCalendarId: 'ff0086f18ef30c41761ae607901a9dd3888fa34e6408fced9785cf5a1f1b608c@group.calendar.google.com',
            backgroundColor: '#d44245'
          },
          {
            // Base64: MzhjYmVjOWU1ZDc0MGZkN2Y0ZTk5MWEzZGZlMjlkMGRiY2QxMzI0N2JlY2Y2ZTU5NjhhMDZiMTk1ZDUwZjMzOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t
            className: 'festausschuss',
            googleCalendarId: '38cbec9e5d740fd7f4e991a3dfe29d0dbcd13247becf6e5968a06b195d50f339@group.calendar.google.com',
            backgroundColor: '#fde512'
          },
          {
            // Base64: YTE1YzY2N2ZiNzkyMzJhZjM2YWYwNjEyMTYwZjQxNzkxZmFmNjJmNWU0NDJmOWVhNGU5N2JmMGE1YjE4Y2Y4ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t
            className: 'gemeinschaftsarbeit',
            googleCalendarId: 'a15c667fb79232af36af0612160f41791faf62f5e442f9ea4e97bf0a5b18cf8d@group.calendar.google.com',
            backgroundColor: '#11d075'
          }
        ]
      }
      eventDataTransform={function (eventData) {
          if (eventData.url?.endsWith('ZmYwMDg2ZjE4ZWYzMGM0MTc2MWFlNjA3OTAxYTlkZDM4ODhmYTM0ZTY0MDhmY2VkOTc4NWNmNWExZjFiNjA4Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t')) {
            eventData.url = "/vorstand";
          }
          if (eventData.url?.endsWith('MzhjYmVjOWU1ZDc0MGZkN2Y0ZTk5MWEzZGZlMjlkMGRiY2QxMzI0N2JlY2Y2ZTU5NjhhMDZiMTk1ZDUwZjMzOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t')) {
            eventData.url = "/festausschuss";
          }
          if (eventData.url?.endsWith('YTE1YzY2N2ZiNzkyMzJhZjM2YWYwNjEyMTYwZjQxNzkxZmFmNjJmNWU0NDJmOWVhNGU5N2JmMGE1YjE4Y2Y4ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t')) {
            eventData.url = "/gemeinschaftsarbeit";
          }
        }
      }
      eventClick={function (event) {
        if (event.event.url.includes("google.com") ) {
          event.jsEvent.stopPropagation();
          event.jsEvent.preventDefault();
        }
      }
    }
    />
  )
}




