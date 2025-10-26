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
        right: 'listYear prev,next'
      }}
      listDayFormat={{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        weekday: 'long'
      }}
      listDaySideFormat={false}
      allDayText='ganztägig'
      eventSources={[
          {
            className: 'festausschuss',
            googleCalendarId: '38cbec9e5d740fd7f4e991a3dfe29d0dbcd13247becf6e5968a06b195d50f339@group.calendar.google.com',
            backgroundColor: '#fde512'
          }
        ]
      }
      eventDataTransform={function (eventData) {
          eventData.url = "/festausschuss";
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




